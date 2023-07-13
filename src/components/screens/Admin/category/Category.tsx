import React from 'react'
import { Popconfirm, Space, Spin, Table, message } from 'antd'
import styles from './Category.module.scss'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from 'src/redux/index.endpoints'
import { TCategory } from 'src/redux/allCategories/allCategories.types'
import { AddCategoryForm } from 'src/components/shared/AddCategoryForm/AddCategoryForm'

const Category: React.FC = () => {
	const { data, isLoading } = useGetAllCategoriesQuery()
	const [deleteCategory] = useDeleteCategoryMutation()

	const onClickRemoveCategory = (id: string) => {
		deleteCategory(id)
		message.success('Deleted successfully!')
	}

	const columns = [
		{
			title: 'Latin',
			dataIndex: 'latin',
			key: 'latin',
			render: (_: void, r: TCategory) => <>{r.title[0].latin}</>,
		},
		{
			title: 'Kiril',
			dataIndex: 'kiril',
			key: 'kiril',
			render: (_: void, r: TCategory) => <>{r.title[0].kiril}</>,
		},
		{
			title: 'Actions',
			key: 'action',
			render: (_: any, record: any) => (
				<Space size='middle'>
					<UiButton onClick={() => console.log(data)}>
						<AiOutlineEdit />
					</UiButton>
					<Popconfirm
						title='Delete the task'
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
		<Spin spinning={isLoading}>
			<div className={styles.root}>
				<div className={styles.head}>
					<h2>Kategoriya</h2>
					<AddCategoryForm />
				</div>
				<Table
					pagination={{ position: ['bottomCenter'] }}
					dataSource={data?.data}
					columns={columns}
				></Table>
			</div>
		</Spin>
	)
}
export { Category }
