import React from 'react'
import { Button, Form } from 'antd'
import { UiModal } from 'src/components/ui/modal/UiModal'
import {
	useCreateNewCategoryMutation,
	useEditCategoryMutation,
	useGetAllTypesQuery,
} from 'src/redux/index.endpoints'
import { useSelectors } from 'src/hooks/useSelectors'
import { useActions } from 'src/hooks/useActions'
import { UiInput } from 'src/components/ui/input/UiInput'
import './CategoryForm.scss'
import { TCategory } from 'src/redux/allCategories/allCategories.types'
import { UiSelect } from 'src/components/ui/select/UiSelect'

type selectStateType = {
	label: string
	value: string
}

const CategoryForm: React.FC = () => {
	const [categoryForm] = Form.useForm()
	const { categoryToEdit, categoryModalShow } = useSelectors()
	const { toggleModalCategory, setCategoryToEdit } = useActions()
	const { data: typeData } = useGetAllTypesQuery()
	const [selectTypes, setSelectTypes] = React.useState<selectStateType[]>([])

	const [
		createNewCategory,
		{
			isLoading: createLoading,
			isSuccess: createSuccess,
			isError: createError,
		},
	] = useCreateNewCategoryMutation()
	const [
		editCategory,
		{ isLoading: editLoading, isSuccess: editSuccess, isError: editError },
	] = useEditCategoryMutation()

	const onSubmit = async (values: TCategory) => {
		if (categoryToEdit) {
			await editCategory({ ...values, id: categoryToEdit.id })
		} else {
			await createNewCategory(values)
		}
	}

	const handleCancel = () => {
		toggleModalCategory(false)
		categoryForm.resetFields()
	}

	// if success or error clear form fields and close modal
	React.useEffect(() => {
		if (createSuccess || editSuccess || createError || editError) {
			toggleModalCategory(false)
			categoryForm.resetFields()
		}
	}, [createError, createSuccess, editError, editSuccess])

	// after click edit button this hook will fill the form fields
	React.useEffect(() => {
		if (categoryToEdit) {
			categoryForm.setFieldsValue({ ...categoryToEdit })
		}
	}, [categoryToEdit, categoryForm])

	// if modal closed clear editToEdit from redux store
	React.useEffect(() => {
		if (!categoryModalShow) setCategoryToEdit(null)
	}, [categoryModalShow])

	React.useEffect(() => {
		typeData?.data.map(item => {
			setSelectTypes((prev: any) => [
				...prev,
				{ label: item.title_latin, value: item.id },
			])
		})
	}, [typeData])

	return (
		<UiModal
			title={'Category'}
			open={categoryModalShow}
			onCancel={handleCancel}
			footer={false}
			centered
		>
			<Form
				name='category'
				form={categoryForm}
				layout='vertical'
				onFinish={onSubmit}
			>
				<Form.Item
					name='title_latin'
					label='Latin'
					rules={[{ required: true, message: 'Please input title latin' }]}
				>
					<UiInput />
				</Form.Item>
				<Form.Item
					name='title_kiril'
					label='Kiril'
					rules={[{ required: true, message: 'Please input title kiril' }]}
				>
					<UiInput />
				</Form.Item>
				<Form.Item
					label='Type'
					name='type_id'
					rules={[{ required: true, message: 'Please input title kiril' }]}
				>
					<UiSelect placeholder='Type' options={selectTypes} />
				</Form.Item>
				<Form.Item>
					<Button htmlType='reset'>Reset fields</Button>
					<Button htmlType='button' onClick={handleCancel}>
						Cancel
					</Button>
					<Button
						loading={categoryToEdit ? editLoading : createLoading}
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
export { CategoryForm }
