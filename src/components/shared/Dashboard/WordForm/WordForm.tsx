import React from 'react'
import { Button, Form } from 'antd'
import { UiModal } from 'src/components/ui/modal/UiModal'
import { UiSelect } from 'src/components/ui/select/UiSelect'
import {
	useCreateNewWordMutation,
	useEditWordMutation,
	useGetAllCategoriesQuery,
} from 'src/redux/index.endpoints'
import { TCategory } from 'src/redux/Admin/allCategories/allCategories.types'
import { useSelectors } from 'src/hooks/useSelectors'
import { UiInput } from 'src/components/ui/input/UiInput'
import { useActions } from 'src/hooks/useActions'
import TextArea from 'antd/es/input/TextArea'

type selectStateType = {
	label: string
	value: string
}
type TFormData = {
	title_latin: string
	title_kiril: string
	description_latin: string
	description_kiril: string
	category_id: number
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
	const [options, setOptions] = React.useState<selectStateType[]>([])

	React.useEffect(() => {
		data?.data.map((item: TCategory) =>
			setOptions((prev: selectStateType[]) => [
				...prev,
				{ label: item.title.latin, value: item.id },
			])
		)
	}, [data])

	// on submit button inside form
	const onSubmit = async (values: TFormData) => {
		const processedValues = await {
			title: {
				latin: values['title_latin'],
				kiril: values['title_kiril'],
			},
			description: {
				latin: values['description_latin'],
				kiril: values['description_kiril'],
			},
			category_id: values.category_id,
		}

		if (wordToEdit)
			await editWord({
				...processedValues,
				id: wordToEdit.id,
			})
		else {
			await createNewWord(processedValues)
		}
	}

	// on click cancel button inside form
	const handleCancel = () => {
		toggleModalWord(false)
		wordForm.resetFields()
	}

	// if success or error clear form fields and close modal
	React.useEffect(() => {
		if (createSuccess || editSuccess || createError || editError) {
			toggleModalWord(false)
			wordForm.resetFields()
		}
	}, [createError, createSuccess, editError, editSuccess])

	// after click edit button, this code will fill the form fields
	React.useEffect(() => {
		if (wordToEdit?.id) {
			wordForm.setFieldsValue({
				title_latin: wordToEdit.title.latin,
				title_kiril: wordToEdit.title.kiril,
				description_latin: wordToEdit.description.latin,
				description_kiril: wordToEdit.description.kiril,
				category_id: wordToEdit.category_id,
			})
		}
	}, [wordToEdit?.id, wordForm])

	// if modal closed clear editToEdit from redux store
	React.useEffect(() => {
		if (!wordModalShow) setWordToEdit(null)
	}, [wordModalShow])

	return (
		<UiModal
			title={'Слово'}
			open={wordModalShow}
			onCancel={handleCancel}
			footer={false}
			centered
			width={800}
		>
			<Form name='words' form={wordForm} layout='vertical' onFinish={onSubmit}>
				<Form.Item
					label='Слово на латинице'
					name='title_latin'
					rules={[
						{
							required: true,
							message: 'Пожалуйста заполните поле',
						},
					]}
				>
					<UiInput />
				</Form.Item>
				<Form.Item
					label='Слово на кириллице'
					name='title_kiril'
					rules={[
						{
							required: true,
							message: 'Пожалуйста заполните поле',
						},
					]}
				>
					<UiInput />
				</Form.Item>
				<Form.Item
					label='Описание слова на латинице'
					name='description_latin'
					rules={[
						{
							required: true,
							message: 'Пожалуйста заполните поле',
						},
					]}
				>
					<TextArea autoSize />
				</Form.Item>
				<Form.Item
					label='Описание слова на кириллице'
					name='description_kiril'
					rules={[
						{
							required: true,
							message: 'Пожалуйста заполните поле',
						},
					]}
				>
					<TextArea autoSize />
				</Form.Item>
				<Form.Item
					label='Категория'
					name='category_id'
					rules={[
						{
							required: true,
							message: 'Пожалуйста выберите категорию',
						},
					]}
				>
					<UiSelect
						allowClear
						placeholder={'Выберите категорию'}
						options={options}
					/>
				</Form.Item>
				<Form.Item>
					<Button htmlType='reset'>Очистить все поля</Button>
					<Button htmlType='button' onClick={handleCancel}>
						Отмена
					</Button>
					<Button
						loading={wordToEdit ? editLoading : createLoading}
						type='primary'
						htmlType='submit'
					>
						Отправить
					</Button>
				</Form.Item>
			</Form>
		</UiModal>
	)
}
export { WordForm }
