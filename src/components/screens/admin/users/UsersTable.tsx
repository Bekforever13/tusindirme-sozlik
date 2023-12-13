import { Popconfirm, Space, Table, message } from 'antd'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { UiButton } from 'src/components/ui/button/UiButton'
import { TUser } from 'src/redux/Admin/users/Users.types'
import { UiRedButton } from 'src/components/ui/button/UiRedButton'
import { useActions } from 'src/hooks/useActions'
import {
	useDeleteUserMutation,
	useGetAllUsersQuery,
} from 'src/redux/index.endpoints'

const UsersTable: React.FC = () => {
	const { data: adminsData, isLoading } = useGetAllUsersQuery()
	const { toggleModalUser, setUserToEdit } = useActions()
	const [deleteAdmin, { isSuccess, isError }] = useDeleteUserMutation()

	const onClickRemoveAdmin = (id: string) => {
		deleteAdmin(id)
		isSuccess && message.success('Deleted successfully')
		isError && message.error('Error occured')
	}

	const handleEditButtonClick = (record: TUser) => {
		setUserToEdit(record)
		toggleModalUser(true)
	}

	const columns = [
		{ title: 'id', dataIndex: 'id', key: 'id' },
		{ title: 'Name', dataIndex: 'name', key: 'name' },
		{ title: 'Phone', dataIndex: 'phone', key: 'phone' },
		{
			title: 'Role',
			dataIndex: 'role',
			key: 'role',
		},
		{
			title: 'Actions',
			key: 'aciton',
			render: (_: void, r: TUser) => {
				return (
					<Space size='middle'>
						<UiButton
							onClick={() => handleEditButtonClick(r)}
							icon={<AiOutlineEdit />}
						/>
						<Popconfirm
							title={'Delete user'}
							description={'Are you sure to delete this user?'}
							onConfirm={() => onClickRemoveAdmin(r.id)}
							okText='Yes'
							cancelText='No'
						>
							<UiRedButton icon={<BsTrash />} />
						</Popconfirm>
					</Space>
				)
			},
		},
	]

	return (
		<Table
			rowKey={item => item.id}
			loading={isLoading}
			pagination={{ position: ['bottomCenter'] }}
			dataSource={adminsData?.data}
			columns={columns}
		/>
	)
}
export { UsersTable }
