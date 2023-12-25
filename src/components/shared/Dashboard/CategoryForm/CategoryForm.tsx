import React from 'react'
import { Button, Form } from 'antd'
import { UiModal } from 'src/components/ui/modal/UiModal'
import {
	useCreateNewCategoryMutation,
	useEditCategoryMutation,
} from 'src/redux/index.endpoints'
import { useSelectors } from 'src/hooks/useSelectors'
import { useActions } from 'src/hooks/useActions'
import { UiInput } from 'src/components/ui/input/UiInput'
import './CategoryForm.scss'
import { TCategoryFomData } from 'src/redux/Admin/allCategories/allCategories.types'

const CategoryForm: React.FC = () => {
	const [categoryForm] = Form.useForm()
	const { categoryToEdit, categoryModalShow } = useSelectors()
	const { toggleModalCategory, setCategoryToEdit } = useActions()

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

	const onSubmit = async (values: TCategoryFomData) => {
		console.log(values)
		if (categoryToEdit?.title.kiril) {
			await editCategory({
				id: categoryToEdit.id,
				title: { latin: values.title_latin, kiril: values.title_kiril },
			})
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
			categoryForm.setFieldsValue({
				title_latin: categoryToEdit.title.latin,
				title_kiril: categoryToEdit.title.kiril,
			})
		}
	}, [categoryToEdit, categoryForm])

	// if modal closed clear editToEdit from redux store
	React.useEffect(() => {
		if (!categoryModalShow) setCategoryToEdit(null)
	}, [categoryModalShow])

	return (
		<UiModal
			title={'Категория'}
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
					label='Категория на латинице'
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
					name='title_kiril'
					label='Категория на кириллице'
					rules={[
						{
							required: true,
							message: 'Пожалуйста заполните поле',
						},
					]}
				>
					<UiInput />
				</Form.Item>
				<Form.Item>
					<Button htmlType='reset'>Очистить все поля</Button>
					<Button htmlType='button' onClick={handleCancel}>
						Отмена
					</Button>
					<Button
						loading={categoryToEdit ? editLoading : createLoading}
						type='primary'
						htmlType='submit'
					>
						Подтвердить
					</Button>
				</Form.Item>
			</Form>
		</UiModal>
	)
}
export { CategoryForm }
