import { Popconfirm, Space, Table, message } from 'antd'
import { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { FaHistory } from 'react-icons/fa'
import { UiButton } from 'src/components/ui/button/UiButton'
import { TUser } from 'src/redux/Admin/users/Users.types'
import { UiRedButton } from 'src/components/ui/button/UiRedButton'
import { useActions } from 'src/hooks/useActions'
import {
	useDeleteUserMutation,
	useGetAllUsersQuery,
} from 'src/redux/index.endpoints'
import { AdminHistory } from './AdminHistory'

const UsersTable: React.FC = () => {
	const [isModal, setIsModal] = useState(false)
	const [activeAdminId, setActiveAdminId] = useState(0)
	const { data: adminsData, isLoading } = useGetAllUsersQuery()
	const { toggleModalUser, setUserToEdit } = useActions()
	const [deleteAdmin, { isSuccess, isError }] = useDeleteUserMutation()

	const onClickRemoveAdmin = (id: number) => {
		deleteAdmin(id)
		isSuccess && message.success('Deleted successfully')
		isError && message.error('Error occured')
	}

	const handleEditButtonClick = (record: TUser) => {
		setUserToEdit(record)
		toggleModalUser(true)
	}

	const columns = [
		{ title: 'Имя', dataIndex: 'name', key: 'name' },
		{ title: 'Телефон', dataIndex: 'phone', key: 'phone' },
		{ title: 'Роль', dataIndex: 'role', key: 'role' },
		{
			title: 'Действия',
			key: 'aciton',
			render: (_: void, r: TUser) => {
				return (
					<Space size='middle'>
						<UiButton
							onClick={() => handleEditButtonClick(r)}
							icon={<AiOutlineEdit size='20' />}
						/>
						<Popconfirm
							title={'Удалить админа?'}
							description={'Вы действительно хотите удалить админа?'}
							onConfirm={() => onClickRemoveAdmin(r.id!)}
							okText='Да'
							cancelText='Отмена'
						>
							<UiRedButton icon={<BsTrash size='20' />} />
						</Popconfirm>
						<UiButton
							onClick={() => {
								setActiveAdminId(r.id!)
								setIsModal(true)
							}}
							icon={<FaHistory size='20' />}
						/>
					</Space>
				)
			},
		},
	]

	return (
		<>
			<Table
				size='small'
				scroll={{ x: true }}
				rowKey={item => item.id!}
				loading={isLoading}
				dataSource={adminsData?.data}
				columns={columns}
			/>
			<AdminHistory
				isModal={isModal}
				setIsModal={setIsModal}
				adminId={activeAdminId}
			/>
		</>
	)
}
export { UsersTable }
