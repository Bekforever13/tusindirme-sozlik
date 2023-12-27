// import { Space, Table } from 'antd'
// import { UiButton } from 'src/components/ui/button/UiButton'
// import { AiOutlineEdit } from 'react-icons/ai'
// import { useGetAdminAllWordsQuery } from 'src/redux/index.endpoints'
// import { TWord } from 'src/redux/Admin/allWords/Allwords.types'
// import { useActions } from 'src/hooks/useActions'
// import { StatusTag } from 'src/components/shared/Dashboard/tag/StatusTag'
// import type { ColumnsType } from 'antd/es/table'

// const CopywriterTable: React.FC = () => {
// 	const { data: wordsData, isLoading } = useGetAdminAllWordsQuery({})
// 	const { setWordToEdit, toggleModalWord } = useActions()

// 	const handleEditButtonClick = (record: TWord) => {
// 		setWordToEdit(record)
// 		toggleModalWord(true)
// 	}

// 	const columns: ColumnsType<any> = [
// 		{
// 			title: 'Слово лат.',
// 			dataIndex: 'title',
// 			key: 'title',
// 			render: (_, rec) => rec.title.latin,
// 		},
// 		{
// 			title: 'Слово кир.',
// 			dataIndex: 'title',
// 			key: 'title',
// 			render: (_, rec) => rec.title.kiril,
// 		},
// 		{
// 			title: 'Описание лат.',
// 			dataIndex: 'description.latin',
// 			key: 'description.latin',
// 			render: (_, rec) => (
// 				<div className={styles.description}>{rec.description.latin}</div>
// 			),
// 		},
// 		{
// 			title: 'Описание кир.',
// 			dataIndex: 'description.kiril',
// 			key: 'description.kiril',
// 			render: (_, rec) => (
// 				<div className={styles.description}>{rec.description.kiril}</div>
// 			),
// 		},
// 		{
// 			title: 'Категория',
// 			dataIndex: 'category_id',
// 			key: 'category_id',
// 			render: (_, rec) => rec.category.kiril,
// 		},
// 		{
// 			title: 'Status',
// 			key: 'status_id',
// 			dataIndex: 'status_id',
// 			render: (_: void, record: TWord) => <StatusTag type={record.status} />,
// 		},
// 		{
// 			title: 'Actions',
// 			key: 'action',
// 			render: (_: void, record: TWord) => (
// 				<Space size='middle'>
// 					<UiButton
// 						icon={<AiOutlineEdit />}
// 						onClick={() => handleEditButtonClick(record)}
// 					/>
// 				</Space>
// 			),
// 		},
// 	]

// 	return (
// 		<Table
// 			rowKey={item => item.id}
// 			pagination={{ position: ['bottomCenter'] }}
// 			loading={isLoading}
// 			dataSource={wordsData?.data}
// 			columns={columns}
// 		/>
// 	)
// }
// export { CopywriterTable }
