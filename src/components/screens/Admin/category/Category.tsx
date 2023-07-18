import React from 'react'
import { Popconfirm, Space, Table, Tag, message } from 'antd'
import styles from './Category.module.scss'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import {
	useDeleteCategoryMutation,
	useGetAllCategoriesQuery,
} from 'src/redux/index.endpoints'
import { TCategory } from 'src/redux/allCategories/allCategories.types'
import { CategoryForm } from 'src/components/shared/CategoryForm/CategoryForm'
import { useActions } from 'src/hooks/useActions'

const Category: React.FC = () => {
	const { data, isLoading } = useGetAllCategoriesQuery()
	const { toggleModalCategory, setCategoryToEdit } = useActions()
	const [deleteCategory] = useDeleteCategoryMutation()

	const onClickRemoveCategory = (id: string) => {
		deleteCategory(id)
		message.success('Deleted successfully!')
	}
	const handleEditButtonClick = (record: TCategory) => {
		setCategoryToEdit(record)
		toggleModalCategory(true)
	}

	const dataSource = data?.data.map(item => ({ ...item, key: item.id }))

	const columns = [
		{
			title: 'Latin',
			dataIndex: 'latin',
			key: 'latin',
			render: (_: void, r: TCategory) => <>{r.title_latin}</>,
		},
		{
			title: 'Kiril',
			dataIndex: 'kiril',
			key: 'kiril',
			render: (_: void, r: TCategory) => <>{r.title_kiril}</>,
		},
		{
			title: 'Type',
			key: 'type_id',
			dataIndex: 'type_id',
			render: (_: void, record: TCategory) => {
				let color = null
				let title = null
				if (record.type_id === 1) {
					color = 'cyan'
					title = 'SO’Z SHAQAPLARI’'
				} else if (record.type_id === 2) {
					color = 'pink'
					title = 'IDK'
				} else {
					color = 'orange'
					title = 'CONFIRMED'
				}
				return (
					<>
						<Tag color={color} key={record.type_id}>
							{title}
						</Tag>
					</>
				)
			},
		},
		{
			title: 'Actions',
			key: 'action',
			render: (_: void, record: TCategory) => (
				<Space size='middle'>
					<UiButton onClick={() => handleEditButtonClick(record)}>
						<AiOutlineEdit />
					</UiButton>
					<Popconfirm
						title='Delete the word'
						description='Are you sure to delete this category?'
						onConfirm={() => onClickRemoveCategory(record.id)}
						okText='Yes'
						cancelText='No'
					>
						<UiButton>
							<BsTrash />
						</UiButton>
					</Popconfirm>
				</Space>
			),
		},
	]

	return (
		<div className={styles.root}>
			<div className={styles.head}>
				<h2>Kategoriya</h2>
				<UiButton onClick={() => toggleModalCategory(true)}>
					Add Category
				</UiButton>
				<CategoryForm />
			</div>
			<Table
				pagination={{ position: ['bottomCenter'] }}
				loading={isLoading}
				dataSource={dataSource}
				columns={columns}
			/>
		</div>
	)
}
export { Category }
