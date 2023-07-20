import React from 'react'
import { Button, Form, message } from 'antd'
import { UiModal } from 'src/components/ui/modal/UiModal'
import { UiSelect } from 'src/components/ui/select/UiSelect'
import {
	useCreateNewWordMutation,
	useEditWordMutation,
	useGetAllCategoriesQuery,
} from 'src/redux/index.endpoints'
import { TCategory } from 'src/redux/allCategories/allCategories.types'
import { TWord } from 'src/redux/allWords/Allwords.types'
import { useSelectors } from 'src/hooks/useSelectors'
import { UiInput } from 'src/components/ui/input/UiInput'
import { useActions } from 'src/hooks/useActions'

type selectStateType = {
	label: string
	value: string
}

const WordForm: React.FC = () => {
	const [wordForm] = Form.useForm()
	const { wordToEdit, wordModalShow } = useSelectors()
	const { toggleModalWord, setWordToEdit } = useActions()
	const [
		createNewWord,
		{
			isLoading: createLoading,
			isSuccess: createSuccess,
			isError: createError,
		},
	] = useCreateNewWordMutation()
	const [
		editWord,
		{ isLoading: editLoading, isSuccess: editSuccess, isError: editError },
	] = useEditWordMutation()
	const { data } = useGetAllCategoriesQuery()
	const [selectOptions, setSelectOptions] = React.useState<any>([])
	const selectStatus = [
		{ label: 'Pending', value: 1 },
		{ label: 'Rejected', value: 2 },
		{ label: 'Confirm', value: 3 },
	]

	React.useEffect(() => {
		data?.data.map((item: TCategory) =>
			setSelectOptions((prev: selectStateType[]) => [
				...prev,
				{ label: item.title_latin, value: item.id },
			])
		)
	}, [data])

	// on submit button inside form
	const onSubmit = async (values: TWord) => {
		if (wordToEdit)
			await editWord({
				...values,
				id: wordToEdit.id,
			})
		else {
			await createNewWord({ ...values, correct: false })
		}
	}

	// on click cancel button inside form
	const handleCancel = () => {
		toggleModalWord(false)
		wordForm.resetFields()
	}

	// notification message
	// React.useEffect(() => {
	// 	if (createSuccess) message.success('Successfully created new word')
	// 	if (editSuccess) message.success('Successfully edited word')
	// 	if (editError || createError) message.error('Error occured')
	// }, [createSuccess, editSuccess, editError, createError])

	// if success or error clear form fields and close modal
	React.useEffect(() => {
		if (createSuccess || editSuccess || createError || editError) {
			toggleModalWord(false)
			wordForm.resetFields()
		}
	}, [createError, createSuccess, editError, editSuccess])

	// after click edit button this hook will fill the form fields
	React.useEffect(() => {
		if (wordToEdit) {
			wordForm.setFieldsValue({ ...wordToEdit })
		}
	}, [wordToEdit, wordForm])

	// if modal closed clear editToEdit from redux store
	React.useEffect(() => {
		if (!wordModalShow) setWordToEdit(null)
	}, [wordModalShow])

	return (
		<UiModal
			title={'Word'}
			open={wordModalShow}
			onCancel={handleCancel}
			footer={false}
			centered
		>
			<Form name='word' form={wordForm} layout='vertical' onFinish={onSubmit}>
				<Form.Item
					label='Title latin'
					name='title_latin'
					rules={[{ required: true, message: 'Please input title latin!' }]}
				>
					<UiInput />
				</Form.Item>
				<Form.Item
					label='Title kiril'
					name='title_kiril'
					rules={[{ required: true, message: 'Please input title kiril!' }]}
				>
					<UiInput />
				</Form.Item>
				<Form.Item
					label='Description latin'
					name='description_latin'
					rules={[
						{ required: true, message: 'Please input Description latin!' },
					]}
				>
					<UiInput />
				</Form.Item>
				<Form.Item
					label='Description kiril'
					name='description_kiril'
					rules={[
						{ required: true, message: 'Please input Description kiril!' },
					]}
				>
					<UiInput />
				</Form.Item>
				<Form.Item
					label='Category'
					name='category_id'
					rules={[{ required: true, message: 'Please select categories' }]}
				>
					{/*  need to fix here below */}
					<UiSelect
						mode='multiple'
						allowClear
						placeholder={'Category'}
						options={selectOptions}
					/>
				</Form.Item>
				{wordToEdit ? (
					<Form.Item label='Status' name='status_id'>
						<UiSelect placeholder='Status' options={selectStatus} />
					</Form.Item>
				) : (
					''
				)}
				<Form.Item>
					<Button htmlType='reset'>Reset fields</Button>
					<Button htmlType='button' onClick={handleCancel}>
						Cancel
					</Button>
					<Button
						loading={wordToEdit ? editLoading : createLoading}
						type='primary'
						htmlType='submit'
					>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</UiModal>
	)
}
export { WordForm }
