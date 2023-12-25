import { Space, Table, Popconfirm, message } from 'antd'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { RiTranslate } from 'react-icons/ri'
import {
	useDeleteWordMutation,
	useGetAdminAllWordsQuery,
} from 'src/redux/index.endpoints'
import { TWordAS } from 'src/redux/Admin/allWords/Allwords.types'
import { useActions } from 'src/hooks/useActions'
import { UiRedButton } from 'src/components/ui/button/UiRedButton'
import type { ColumnsType } from 'antd/es/table'
import styles from './Words.module.scss'
import { useEffect, useState } from 'react'
import { WordsAntonimSinonim } from './WordsAntonimSinonim'
import { useSelectors } from 'src/hooks/useSelectors'
import { useDebounce } from 'src/hooks/useDebounce'

const WordsTable: React.FC = () => {
	const [deleteWord, { isSuccess: deleteSuccess }] = useDeleteWordMutation()
	const [currentPage, setCurrentPage] = useState(1)
	const [pageSize, setPageSize] = useState(10)
	const { wordSearch } = useSelectors()
	const debouncedSearch = useDebounce(wordSearch, 500)
	const { setWordToEdit, toggleModalWord, setCurrentWord, setAntSinModal } =
		useActions()
	const { data: wordsData, isLoading } = useGetAdminAllWordsQuery({
		search: debouncedSearch,
		page: currentPage,
		limit: pageSize,
	})

	const onClickRemoveWord = (id: number) => {
		deleteWord(id)
	}

	const handleEditButtonClick = (record: TWordAS) => {
		setWordToEdit(record)
		toggleModalWord(true)
	}

	useEffect(() => {
		if (deleteSuccess) message.success('Слово удалено')
	}, [deleteSuccess])

	const columns: ColumnsType<any> = [
		{
			title: 'Слово лат.',
			dataIndex: 'title',
			key: 'title',
			render: (_, rec) => rec.title.latin,
		},
		{
			title: 'Слово кир.',
			dataIndex: 'title',
			key: 'title',
			render: (_, rec) => rec.title.kiril,
		},
		{
			title: 'Описание лат.',
			dataIndex: 'description.latin',
			key: 'description.latin',
			render: (_, rec) => (
				<div className={styles.description}>{rec.description.latin}</div>
			),
		},
		{
			title: 'Описание кир.',
			dataIndex: 'description.kiril',
			key: 'description.kiril',
			render: (_, rec) => (
				<div className={styles.description}>{rec.description.kiril}</div>
			),
		},
		{
			title: 'Категория',
			dataIndex: 'category_id',
			key: 'category_id',
			render: (_, rec) => rec.category.kiril,
		},
		{
			title: 'Действия',
			key: 'action',
			render: (_, record) => (
				<Space size='middle'>
					<UiButton
						icon={<AiOutlineEdit size='20' />}
						onClick={() => handleEditButtonClick(record)}
					/>
					<Popconfirm
						title='Удаление'
						description='Вы действительно хотите удалить?'
						onConfirm={() => onClickRemoveWord(record.id)}
						okText='Да'
						cancelText='Отмена'
					>
						<UiRedButton icon={<BsTrash size='20' />} />
					</Popconfirm>
					<UiButton
						icon={<RiTranslate size='20' />}
						onClick={() => {
							setCurrentWord(record)
							setAntSinModal(true)
						}}
					/>
				</Space>
			),
		},
	]

	return (
		<>
			<Table
				size='small'
				scroll={{ x: true }}
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
			<WordsAntonimSinonim />
		</>
	)
}
export { WordsTable }
