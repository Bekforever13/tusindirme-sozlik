import { Space, Table, Popconfirm, message } from 'antd'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import {
	useDeleteWordMutation,
	useGetAllWordsQuery,
} from 'src/redux/index.endpoints'
import { TWord } from 'src/redux/Admin/allWords/Allwords.types'
import { useActions } from 'src/hooks/useActions'
import { UiRedButton } from 'src/components/ui/button/UiRedButton'
import type { ColumnsType } from 'antd/es/table'
import styles from './Words.module.scss'
import { useEffect, useState } from 'react'

const WordsTable: React.FC = () => {
	const [deleteWord, { isSuccess: deleteSuccess }] = useDeleteWordMutation()
	const [currentPage, setCurrentPage] = useState(1)
	const [pageSize, setPageSize] = useState(10)
	const { setWordToEdit, toggleModalWord } = useActions()
	const { data: wordsData, isLoading } = useGetAllWordsQuery({
		search: '',
		page: currentPage,
		limit: pageSize,
	})

	const onClickRemoveWord = (id: number) => {
		deleteWord(id)
	}

	const handleEditButtonClick = (record: TWord) => {
		setWordToEdit(record)
		toggleModalWord(true)
	}

	useEffect(() => {
		if (deleteSuccess) message.success('Слово удалено')
	}, [deleteSuccess])

	const columns: ColumnsType<TWord> = [
		{
			title: 'Sóz',
			dataIndex: 'title',
			key: 'title',
			render: (_, rec) => rec.title.latin,
		},
		{
			title: 'Сөз',
			dataIndex: 'title',
			key: 'title',
			render: (_, rec) => rec.title.kiril,
		},
		{
			title: 'Description latin',
			dataIndex: 'description.latin',
			key: 'description.latin',
			render: (_, rec) => (
				<div className={styles.description}>{rec.description.latin}</div>
			),
		},
		{
			title: 'Description kiril',
			dataIndex: 'description.kiril',
			key: 'description.kiril',
			render: (_, rec) => (
				<div className={styles.description}>{rec.description.kiril}</div>
			),
		},
		{
			title: 'Category',
			dataIndex: 'category_id',
			key: 'category_id',
			render: (_, rec) => rec.category.kiril,
		},
		{
			title: 'Actions',
			key: 'action',
			render: (_, record) => (
				<Space size='middle'>
					<UiButton
						icon={<AiOutlineEdit />}
						onClick={() => handleEditButtonClick(record)}
					/>
					<Popconfirm
						title='Удаление'
						description='Вы действительно хотите удалить?'
						onConfirm={() => onClickRemoveWord(record.id)}
						okText='Да'
						cancelText='Отмена'
					>
						<UiRedButton icon={<BsTrash />} />
					</Popconfirm>
				</Space>
			),
		},
	]

	return (
		<Table
			size='small'
			rowKey={item => item.id}
			pagination={{
				total: wordsData?.total,
				showSizeChanger: true,
				current: currentPage,
				pageSize: pageSize,
				onChange: (page, pageSize) => {
					setCurrentPage(page)
					setPageSize(pageSize)
				},
			}}
			loading={isLoading}
			dataSource={wordsData?.data}
			columns={columns}
		/>
	)
}
export { WordsTable }
