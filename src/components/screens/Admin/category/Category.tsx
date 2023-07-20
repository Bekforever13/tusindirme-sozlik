import React from 'react'
import { Popconfirm, Space, Table, Tag, message } from 'antd'
import styles from './Category.module.scss'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import {
	useDeleteCategoryMutation,
	useGetAllCategoriesQuery,
	useGetAllTypesQuery,
} from 'src/redux/index.endpoints'
import { TCategory } from 'src/redux/allCategories/allCategories.types'
import { CategoryForm } from 'src/components/shared/CategoryForm/CategoryForm'
import { useActions } from 'src/hooks/useActions'
import { UiRedButton } from 'src/components/ui/button/UiRedButton'
import { TType } from 'src/redux/types/_Types.types'

const Category: React.FC = () => {
	const { data: categoriesData, isLoading } = useGetAllCategoriesQuery()
	const { toggleModalCategory, setCategoryToEdit } = useActions()
	const [deleteCategory, { isSuccess }] = useDeleteCategoryMutation()
	const { data: typesData } = useGetAllTypesQuery()

	const onClickRemoveCategory = (id: string) => {
		deleteCategory(id)
		isSuccess && message.success('Deleted successfully!')
	}
	const handleEditButtonClick = (record: TCategory) => {
		setCategoryToEdit(record)
		toggleModalCategory(true)
	}

	const dataSource = categoriesData?.data.map((item: TCategory) => ({
		...item,
		key: item.id,
	}))

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
				let color: string = ''
				let title: string = ''
				typesData?.data.map((item: TType) => {
					item.id === record.type_id && (title = item.title_latin)
				})

				return (
					<Tag color={color} key={record.type_id}>
						{title}
					</Tag>
				)
			},
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
						title='Delete the word'
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
