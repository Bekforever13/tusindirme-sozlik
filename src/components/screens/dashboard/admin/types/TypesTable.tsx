import { Popconfirm, Space, Table, message } from 'antd'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { useActions } from 'src/hooks/useActions'
import { TType } from 'src/redux/types/Types.types'
import {
	useDeleteTypeMutation,
	useGetAllTypesQuery,
} from 'src/redux/index.endpoints'
import { UiRedButton } from 'src/components/ui/button/UiRedButton'

const TypesTable: React.FC = () => {
	const { data, isLoading } = useGetAllTypesQuery()
	const { toggleModalType, setTypeToEdit } = useActions()
	const [deleteType] = useDeleteTypeMutation()

	const onClickRemoveCategory = (id: string) => {
		deleteType(id)
		message.success('Deleted successfully!')
	}
	const handleEditButtonClick = (record: TType) => {
		setTypeToEdit(record)
		toggleModalType(true)
	}

	const columns = [
		{
			title: 'Latin',
			dataIndex: 'latin',
			key: 'latin',
			render: (_: void, r: TType) => <>{r.title_latin}</>,
		},
		{
			title: 'Kiril',
			dataIndex: 'kiril',
			key: 'kiril',
			render: (_: void, r: TType) => <>{r.title_kiril}</>,
		},
		{
			title: 'Actions',
			key: 'action',
			render: (_: void, record: TType) => (
				<Space size='middle'>
					<UiButton
						icon={<AiOutlineEdit />}
						onClick={() => handleEditButtonClick(record)}
					/>
					<Popconfirm
						title='Delete the type'
						description='Are you sure to delete this type?'
						onConfirm={() => onClickRemoveCategory(record.id)}
						okText='Yes'
						cancelText='No'
					>
						<UiRedButton icon={<BsTrash />} />
					</Popconfirm>
				</Space>
			),
		},
	]

	return (
		<Table
			rowKey={item => item.id}
			pagination={{ position: ['bottomCenter'] }}
			loading={isLoading}
			dataSource={data?.data}
			columns={columns}
		/>
	)
}
export { TypesTable }
