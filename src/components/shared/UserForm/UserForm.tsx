import React, { useState } from 'react'
import { Button, Form } from 'antd'
import { UiModal } from 'src/components/ui/modal/UiModal'
import { useSelectors } from 'src/hooks/useSelectors'
import { useActions } from 'src/hooks/useActions'
import { UiInput } from 'src/components/ui/input/UiInput'
import { UiSelect } from 'src/components/ui/select/UiSelect'
import { TUser } from 'src/redux/users/Users.types'
import './UserForm.scss'
import {
	useCreateNewUserMutation,
	useEditUserMutation,
	useGetAllRolesQuery,
} from 'src/redux/index.endpoints'

type selectStateType = {
	label: string
	value: string
}

const UserForm: React.FC = () => {
	const [userForm] = Form.useForm()
	const { userToEdit, usersModalShow } = useSelectors()
	const { toggleModalUser, setUserToEdit } = useActions()
	const { data: rolesData } = useGetAllRolesQuery()
	const [currentRoleID, setCurrentRoleID] = useState<string>()
	const [selectTypes, setSelectTypes] = React.useState<selectStateType[]>([])

	const [
		createNewUser,
		{
			isLoading: createLoading,
			isSuccess: createSuccess,
			isError: createError,
		},
	] = useCreateNewUserMutation()
	const [
		editUser,
		{ isLoading: editLoading, isSuccess: editSuccess, isError: editError },
	] = useEditUserMutation()

	const onSubmit = async (values: TUser) => {
		console.log(values)
		if (userToEdit) {
			await editUser({ ...values, id: userToEdit.id })
		} else {
			await createNewUser(values)
		}
	}

	const handleCancel = () => {
		toggleModalUser(false)
		userForm.resetFields()
	}

	// if success or error clear form fields and close modal
	React.useEffect(() => {
		if (createSuccess || editSuccess || createError || editError) {
			toggleModalUser(false)
			userForm.resetFields()
		}
	}, [createError, createSuccess, editError, editSuccess])

	// after click edit button this hook will fill the form fields
	React.useEffect(() => {
		if (userToEdit) {
			rolesData?.map(item => {
				return item.name === userToEdit.name && setCurrentRoleID(item.id)
			})
			userForm.setFieldsValue({ ...userToEdit, roles_id: currentRoleID })
			console.log(rolesData)
		}
	}, [userToEdit, userForm])

	// if modal closed clear editToEdit from redux store
	React.useEffect(() => {
		if (!usersModalShow) setUserToEdit(null)
	}, [usersModalShow])

	React.useEffect(() => {
		if (rolesData) {
			rolesData?.map(item => {
				setSelectTypes((prev: any) => [
					...prev,
					{ label: item.name, value: item.id },
				])
			})
		}
	}, [rolesData])

	return (
		<UiModal
			title={'Admin'}
			open={usersModalShow}
			onCancel={handleCancel}
			footer={false}
			centered
		>
			<Form name='admin' form={userForm} layout='vertical' onFinish={onSubmit}>
				<Form.Item
					name='name'
					label='Name'
					rules={[{ required: true, message: 'Please input name' }]}
				>
					<UiInput />
				</Form.Item>
				<Form.Item
					name='phone'
					label='Phone'
					rules={[{ required: true, message: 'Please input phone' }]}
				>
					<UiInput />
				</Form.Item>
				{!userToEdit && (
					<Form.Item
						name='password'
						label='Password'
						rules={[{ required: true, message: 'Please input password' }]}
					>
						<UiInput />
					</Form.Item>
				)}
				<Form.Item
					name='role_id'
					label='Role'
					// rules={[{ required: true, message: 'Please input title kiril' }]}
				>
					<UiSelect placeholder='Type' options={selectTypes} />
				</Form.Item>
				<Form.Item>
					<Button htmlType='reset'>Reset fields</Button>
					<Button htmlType='button' onClick={handleCancel}>
						Cancel
					</Button>
					<Button
						loading={userToEdit ? editLoading : createLoading}
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
export { UserForm }
