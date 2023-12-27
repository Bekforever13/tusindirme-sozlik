import React, { useState } from 'react'
import { Button, Form, message } from 'antd'
import { UiModal } from 'src/components/ui/modal/UiModal'
import { useSelectors } from 'src/hooks/useSelectors'
import { useActions } from 'src/hooks/useActions'
import { UiInput } from 'src/components/ui/input/UiInput'
import { UiSelect } from 'src/components/ui/select/UiSelect'
import { TRole, TUser } from 'src/redux/Admin/users/Users.types'
import {
	useCreateNewUserMutation,
	useEditUserMutation,
} from 'src/redux/index.endpoints'
import { MaskedInput } from 'antd-mask-input'
import styles from './UserForm.module.scss'
import { UiInputPassword } from 'src/components/ui/input/UiInputPassword'

type selectStateType = {
	label: string
	value: string
}

const rolesData: TRole[] = [
	{ id: 1, name: 'super_admin' },
	{ id: 2, name: 'admin' },
]

const UserForm: React.FC = () => {
	const [userForm] = Form.useForm()
	const { userToEdit, usersModalShow } = useSelectors()
	const { toggleModalUser, setUserToEdit } = useActions()
	const [currentRoleID, setCurrentRoleID] = useState<string>()
	const [selectTypes, setSelectTypes] = React.useState<selectStateType[]>([])

	const [
		createNewUser,
		{
			isLoading: createLoading,
			isSuccess: createSuccess,
			isError: createError,
			error: createMsg,
		},
	] = useCreateNewUserMutation()
	const [
		editUser,
		{ isLoading: editLoading, isSuccess: editSuccess, isError: editError },
	] = useEditUserMutation()

	const onSubmit = async (values: TUser) => {
		if (userToEdit) {
			await editUser({ ...values, user_id: userToEdit.id })
		} else {
			await createNewUser({ ...values, phone: values.phone.replace(/\D/g, '') })
		}
	}

	React.useEffect(() => {
		if (createMsg) {
			message.error('Данный номер уже зарегистрирован')
		}
	}, [createMsg])

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
			rolesData?.map((item: TRole) => {
				return (
					item.name === userToEdit.name && setCurrentRoleID(item.id.toString())
				)
			})
			userForm.setFieldsValue({ ...userToEdit, roles_id: currentRoleID })
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
			title={'Админ'}
			open={usersModalShow}
			onCancel={handleCancel}
			footer={false}
		>
			<Form name='admin' form={userForm} layout='vertical' onFinish={onSubmit}>
				<Form.Item
					name='name'
					label='Имя'
					rules={[{ required: true, message: 'Пожалуйста заполните поле' }]}
				>
					<UiInput />
				</Form.Item>
				<Form.Item
					name='phone'
					label='Телефон'
					rules={[{ required: true, message: 'Пожалуйста заполните поле' }]}
				>
					<MaskedInput mask={'+{998}00 000 00 00'} />
				</Form.Item>
				{!userToEdit && (
					<Form.Item
						name='password'
						label='Пароль'
						className={styles.password}
						rules={[{ required: true, min: 8, message: 'Минимум 8 символов' }]}
					>
						<UiInputPassword />
					</Form.Item>
				)}
				<Form.Item
					name='role_id'
					label='Роль'
					rules={[{ required: true, message: 'Пожалуйста выберите роль' }]}
				>
					<UiSelect
						placeholder='Выберите роль'
						value={rolesData.find(
							role => role.id === Number(userToEdit?.role_id)
						)}
						options={selectTypes}
					/>
				</Form.Item>
				<Form.Item>
					<Button htmlType='reset'>Очистить все поля</Button>
					<Button htmlType='button' onClick={handleCancel}>
						Отмена
					</Button>
					<Button
						loading={userToEdit ? editLoading : createLoading}
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
export { UserForm }
