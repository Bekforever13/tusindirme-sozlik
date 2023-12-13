import { Popconfirm, Space, Table, Tag, message } from 'antd'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import {
	useDeleteCategoryMutation,
	useGetAllCategoriesQuery,
} from 'src/redux/index.endpoints'
import { TCategory } from 'src/redux/Admin/allCategories/allCategories.types'
import { useActions } from 'src/hooks/useActions'
import { UiRedButton } from 'src/components/ui/button/UiRedButton'

const CategoryTable: React.FC = () => {
	const { data: categoriesData, isLoading } = useGetAllCategoriesQuery()
	const { toggleModalCategory, setCategoryToEdit } = useActions()
	const [deleteCategory, { isSuccess }] = useDeleteCategoryMutation()

	const onClickRemoveCategory = (id: string) => {
		deleteCategory(id)
		isSuccess && message.success('Deleted successfully!')
	}
	const handleEditButtonClick = (record: TCategory) => {
		setCategoryToEdit(record)
		toggleModalCategory(true)
	}

	const columns = [
		{
			title: 'Latin',
			dataIndex: 'title_latin',
			key: 'title_latin',
			render: (_: unknown, rec: TCategory) => rec.title.latin,
		},
		{
			title: 'Kiril',
			dataIndex: 'title_kiril',
			key: 'title_kiril',
			render: (_: unknown, rec: TCategory) => rec.title.kiril,
		},
		{
			title: 'Actions',
			key: 'action',
			render: (_: void, record: TCategory) => (
				<Space size='middle'>
					<UiButton
						icon={<AiOutlineEdit />}
						onClick={() => handleEditButtonClick(record)}
					/>
					<Popconfirm
						title='Delete the category'
						description='Are you sure to delete this category?'
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
			dataSource={categoriesData?.data}
			columns={columns}
		/>
	)
}
export { CategoryTable }
