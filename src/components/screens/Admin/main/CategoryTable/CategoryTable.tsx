import React from 'react'
import { Spin, Table } from 'antd'
import styles from './CategoryTable.module.scss'
import { useGetAllCategoriesQuery } from 'src/redux/index.endpoints'
import { TCategory } from 'src/redux/allCategories/allCategories.types'
import { AddCategoryForm } from 'src/components/shared/AddCategoryForm/AddCategoryForm'

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
]

const CategoryTable: React.FC = () => {
	const { data, isLoading } = useGetAllCategoriesQuery()

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
export { CategoryTable }
