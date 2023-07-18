import React from 'react'
import { Space, Table, Popconfirm, message, Tag } from 'antd'
import styles from './Words.module.scss'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import {
	useDeleteWordMutation,
	useGetAllWordsQuery,
} from 'src/redux/index.endpoints'
import { TWord } from 'src/redux/allWords/Allwords.types'
import { useActions } from 'src/hooks/useActions'
import { WordForm } from 'src/components/shared/WordForm/WordForm'

const Words: React.FC = () => {
	const { data, isLoading } = useGetAllWordsQuery()
	const [deleteWord] = useDeleteWordMutation()
	const { setWordToEdit, toggleModalWord } = useActions()

	const onClickRemoveWord = (id: string) => {
		deleteWord(id)
		message.success('Deleted successfully!')
	}

	React.useEffect(() => {
		if (data?.data) {
			console.log(data)
			console.log(data?.data.length)
		}
	}, [])

	const dataSource = data?.data.map((item: TWord) => ({
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
			title: 'Status',
			key: 'status_id',
			dataIndex: 'status_id',
			render: (_: void, record: TWord) => {
				let color = null
				let title = null
				if (record.status_id === 1) {
					color = 'yellow'
					title = 'PENDING'
				} else if (record.status_id === 2) {
					color = 'red'
					title = 'REJECTED'
				} else {
					color = 'green'
					title = 'CONFIRMED'
				}
				return (
					<>
						<Tag color={color} key={record.status_id}>
							{title}
						</Tag>
					</>
				)
			},
		},
		{
			title: 'Actions',
			render: (_: void, record: TWord) => (
				<Space size='middle'>
					<UiButton onClick={() => handleEditButtonClick(record)}>
						<AiOutlineEdit />
					</UiButton>
					<Popconfirm
						title='Delete the word'
						description='Are you sure to delete this word?'
						onConfirm={() => onClickRemoveWord(record?.id)}
						okText='Yes'
						cancelText='No'
					>
						<UiButton>
							<BsTrash />
						</UiButton>
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
