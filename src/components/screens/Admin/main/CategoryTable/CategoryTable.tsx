import React from 'react'
import styles from './CategoryTable.module.scss'
import { Table, Tag } from 'antd'
import {
	useGetAllCategoriesQuery,
	useGetAllTypesQuery,
} from 'src/redux/index.endpoints'
import { TCategory } from 'src/redux/allCategories/allCategories.types'
import { CategoryForm } from 'src/components/shared/CategoryForm/CategoryForm'
import { UiButton } from 'src/components/ui/button/UiButton'
import { useActions } from 'src/hooks/useActions'
import { TType } from 'src/redux/types/_Types.types'
import { StatusTag } from 'src/components/shared/tag/StatusTag'

const CategoryTable: React.FC = () => {
	const { toggleModalCategory } = useActions()
	const { data: categoriesData, isLoading } = useGetAllCategoriesQuery()
	const { data: typesData } = useGetAllTypesQuery()
	const dataSource = categoriesData?.data.map((item: TCategory) => ({
		...item,
		key: item.id,
	}))

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
				let color = ''
				let title: string = ''
				typesData?.data.map((item: TType) => {
					item.id === record.type_id && (title = item.title_latin)
				})

				return <StatusTag title={title} />
			},
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
				loading={isLoading}
				pagination={{ position: ['bottomCenter'] }}
				dataSource={dataSource}
				columns={columns}
			/>
		</div>
	)
}
export { CategoryTable }
