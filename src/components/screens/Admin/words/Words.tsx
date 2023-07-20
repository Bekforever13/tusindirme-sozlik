import React from 'react'
import { Space, Table, Popconfirm, message, Tag } from 'antd'
import styles from './Words.module.scss'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import {
	useDeleteWordMutation,
	useGetAllCategoriesQuery,
	useGetAllWordsQuery,
} from 'src/redux/index.endpoints'
import { TWord } from 'src/redux/allWords/Allwords.types'
import { useActions } from 'src/hooks/useActions'
import { WordForm } from 'src/components/shared/WordForm/WordForm'
import { UiRedButton } from 'src/components/ui/button/UiRedButton'
import { TCategory } from 'src/redux/allCategories/allCategories.types'
import { StatusTag } from 'src/components/shared/tag/StatusTag'

const Words: React.FC = () => {
	const { data: wordsData, isLoading } = useGetAllWordsQuery()
	const { data: categoryData } = useGetAllCategoriesQuery()
	const [deleteWord] = useDeleteWordMutation()
	const { setWordToEdit, toggleModalWord } = useActions()

	const onClickRemoveWord = (id: string) => {
		deleteWord(id)
		message.success('Deleted successfully!')
	}

	const dataSource = wordsData?.data.map((item: TWord) => ({
		...item,
		key: item.id,
	}))

	const handleEditButtonClick = (record: TWord) => {
		setWordToEdit(record)
		toggleModalWord(true)
	}

	const columns = [
		{
			title: 'Sóz',
			dataIndex: 'title_latin',
			key: 'title_latin',
		},
		{
			title: 'Сөз',
			dataIndex: 'title_kiril',
			key: 'title_kiril',
		},
		{
			title: 'Description latin',
			dataIndex: 'description_latin',
			key: 'description_latin',
		},
		{
			title: 'Description kiril',
			dataIndex: 'description_kiril',
			key: 'description_kiril',
		},
		{
			title: 'Category',
			dataIndex: 'category_id',
			key: 'category_id',
			render: (_: void, r: TWord) => {
				let categoriesOfWord: string[] = []
				r?.category_id?.map(id => {
					categoryData?.data.find((category: TCategory) => {
						category.id === id && categoriesOfWord.push(category.title_latin)
					})
				})
				return (
					<ul>
						{categoriesOfWord.map((x, i) => (
							<li key={i}>{x}</li>
						))}
					</ul>
				)
			},
		},
		{
			title: 'Status',
			key: 'status_id',
			dataIndex: 'status_id',
			render: (_: void, record: TWord) => <StatusTag type={record.status} />,
		},
		{
			title: 'Actions',
			key: 'action',
			render: (_: void, record: TWord) => (
				<Space size='middle'>
					<UiButton
						icon={<AiOutlineEdit />}
						onClick={() => handleEditButtonClick(record)}
					/>
					<Popconfirm
						title='Delete the word'
						description='Are you sure to delete this word?'
						onConfirm={() => onClickRemoveWord(record?.id)}
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
				<h2>Sózler</h2>
				<UiButton onClick={() => toggleModalWord(true)}>Add word</UiButton>
				<WordForm />
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
export { Words }
