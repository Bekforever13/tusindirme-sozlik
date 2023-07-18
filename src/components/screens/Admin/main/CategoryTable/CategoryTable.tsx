import React from 'react'
import styles from './CategoryTable.module.scss'
import { Table, Tag } from 'antd'
import { useGetAllCategoriesQuery } from 'src/redux/index.endpoints'
import { TCategory } from 'src/redux/allCategories/allCategories.types'
import { CategoryForm } from 'src/components/shared/CategoryForm/CategoryForm'
import { UiButton } from 'src/components/ui/button/UiButton'
import { useActions } from 'src/hooks/useActions'

const columns = [
	{
		title: 'Latin',
		dataIndex: 'title_latin',
		key: 'title_latin',
	},
	{
		title: 'Kiril',
		dataIndex: 'title_kiril',
		key: 'title_kiril',
	},
	{
		title: 'Type',
		key: 'type_id',
		dataIndex: 'type_id',
		render: (_: void, record: TCategory) => {
			let color = null
			let title = null
			if (record.type_id === 1) {
				color = 'pink'
				title = 'SO’Z SHAQAPLARI’'
			} else if (record.type_id === 2) {
				color = 'red'
				title = ''
			} else {
				color = 'green'
				title = ''
			}
			return (
				<Tag color={color} key={record.type_id}>
					{title}
				</Tag>
			)
		},
	},
]

const CategoryTable: React.FC = () => {
	const { toggleModalCategory } = useActions()
	const { data, isLoading } = useGetAllCategoriesQuery()
	const dataSource = data?.data.map(item => ({ ...item, key: item.id }))

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
				loading={isLoading}
				pagination={{ position: ['bottomCenter'] }}
				dataSource={dataSource}
				columns={columns}
			/>
		</div>
	)
}
export { CategoryTable }
