import { Space, Table } from 'antd'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import {
	useGetAllCategoriesQuery,
	useGetAllWordsQuery,
} from 'src/redux/index.endpoints'
import { TWord } from 'src/redux/Admin/allWords/Allwords.types'
import { useActions } from 'src/hooks/useActions'
import { TCategory } from 'src/redux/Admin/allCategories/allCategories.types'
import { StatusTag } from 'src/components/shared/Dashboard/tag/StatusTag'

const CopywriterTable: React.FC = () => {
	const { data: wordsData, isLoading } = useGetAllWordsQuery('')
	const { data: categoryData } = useGetAllCategoriesQuery()
	const { setWordToEdit, toggleModalWord } = useActions()

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
				</Space>
			),
		},
	]

	return (
		<Table
			rowKey={item => item.id}
			pagination={{ position: ['bottomCenter'] }}
			loading={isLoading}
			dataSource={wordsData?.data}
			columns={columns}
		/>
	)
}
export { CopywriterTable }
