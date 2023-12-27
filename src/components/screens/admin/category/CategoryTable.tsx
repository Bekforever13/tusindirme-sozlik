import { Popconfirm, Space, Table, message } from 'antd'
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
import { useSelectors } from 'src/hooks/useSelectors'

const CategoryTable: React.FC = () => {
	const { data: categoriesData, isLoading } = useGetAllCategoriesQuery()
	const { currentUserRole } = useSelectors()
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
			title: 'Категория лат.',
			dataIndex: 'title_latin',
			key: 'title_latin',
			render: (_: unknown, rec: TCategory) => rec.title.latin,
		},
		{
			title: 'Категория кир.',
			dataIndex: 'title_kiril',
			key: 'title_kiril',
			render: (_: unknown, rec: TCategory) => rec.title.kiril,
		},
		{
			title: 'Действия',
			key: 'action',
			render: (_: void, record: TCategory) => (
				<Space size='middle'>
					<UiButton
						icon={<AiOutlineEdit />}
						onClick={() => handleEditButtonClick(record)}
					/>
					{currentUserRole === 'super_admin' && (
						<Popconfirm
							title='Удалить категорию?'
							description='Вы действительно хотите удалить категорию?'
							onConfirm={() => onClickRemoveCategory(record.id)}
							okText='Да'
							cancelText='Отмена'
						>
							<UiRedButton icon={<BsTrash />} />
						</Popconfirm>
					)}
				</Space>
			),
		},
	]
	return (
		<Table
			size='small'
			scroll={{ x: true }}
			rowKey={item => item.id}
			loading={isLoading}
			dataSource={categoriesData?.data}
			columns={columns}
		/>
	)
}
export { CategoryTable }
