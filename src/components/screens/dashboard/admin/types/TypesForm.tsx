import React from 'react'
import { Button, Form } from 'antd'
import { UiModal } from 'src/components/ui/modal/UiModal'
import {
	useCreateNewTypeMutation,
	useEditTypeMutation,
} from 'src/redux/index.endpoints'
import { useSelectors } from 'src/hooks/useSelectors'
import { useActions } from 'src/hooks/useActions'
import { UiInput } from 'src/components/ui/input/UiInput'
import { TCategory } from 'src/redux/Admin/allCategories/allCategories.types'

const TypesForm: React.FC = () => {
	const [typeForm] = Form.useForm()
	const { typeToEdit, typesModalShow } = useSelectors()
	const { toggleModalType, setTypeToEdit } = useActions()
	const [
		createNewType,
		{
			isLoading: createLoading,
			isSuccess: createSuccess,
			isError: createError,
		},
	] = useCreateNewTypeMutation()
	const [
		editType,
		{ isLoading: editLoading, isSuccess: editSuccess, isError: editError },
	] = useEditTypeMutation()

	const onSubmit = async (values: TCategory) => {
		if (typeToEdit) {
			await editType({ ...values, id: typeToEdit.id })
		} else {
			await createNewType(values)
		}
	}

	const handleCancel = () => {
		toggleModalType(false)
		typeForm.resetFields()
	}

	// if success or error clear form fields and close modal
	React.useEffect(() => {
		if (createSuccess || editSuccess || createError || editError) {
			toggleModalType(false)
			typeForm.resetFields()
		}
	}, [createError, createSuccess, editError, editSuccess])

	// after click edit button this hook will fill the form fields
	React.useEffect(() => {
		if (typeToEdit) {
			typeForm.setFieldsValue({ ...typeToEdit })
		}
	}, [typeToEdit, typeForm])

	// if modal closed clear editToEdit from redux store
	React.useEffect(() => {
		if (!typesModalShow) setTypeToEdit(null)
	}, [typesModalShow])

	return (
		<UiModal
			title={'Type'}
			open={typesModalShow}
			onCancel={handleCancel}
			footer={false}
			centered
		>
			<Form name='Type' form={typeForm} layout='vertical' onFinish={onSubmit}>
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
				<Form.Item>
					<Button htmlType='reset'>Reset fields</Button>
					<Button htmlType='button' onClick={handleCancel}>
						Cancel
					</Button>
					<Button
						loading={typeToEdit ? editLoading : createLoading}
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
export { TypesForm }
