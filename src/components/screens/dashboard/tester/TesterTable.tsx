import { Space, Table } from 'antd'
import { StatusTag } from 'src/components/shared/Dashboard/tag/StatusTag'
import { UiButton } from 'src/components/ui/button/UiButton'
import { UiRedButton } from 'src/components/ui/button/UiRedButton'
import { TCategory } from 'src/redux/allCategories/allCategories.types'
import { TWord } from 'src/redux/allWords/Allwords.types'
import { AiOutlineCheck } from 'react-icons/ai'
import { MdDoNotDisturbAlt } from 'react-icons/md'
import {
	useEditWordMutation,
	useGetAllCategoriesQuery,
	useGetAllWordsQuery,
} from 'src/redux/index.endpoints'

const TesterTable: React.FC = () => {
	const { data: wordsData, isLoading } = useGetAllWordsQuery('')
	const { data: categoryData } = useGetAllCategoriesQuery()
	const [editWord] = useEditWordMutation()

	const submitWord = (r: TWord) => {
		editWord({ ...r, status: 'confirmed' })
	}

	const rejectWord = (r: TWord) => {
		editWord({ ...r, status: 'rejected' })
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
						icon={<AiOutlineCheck />}
						onClick={() => submitWord(record)}
					/>
					<UiRedButton
						icon={<MdDoNotDisturbAlt />}
						onClick={() => rejectWord(record)}
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
export { TesterTable }
