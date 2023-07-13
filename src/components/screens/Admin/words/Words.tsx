import React from 'react'
import { Space, Spin, Table, Popconfirm, message } from 'antd'
import styles from './Words.module.scss'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { AddWordForm } from 'src/components/shared/AddWordForm/AddWordForm'
import {
	useDeleteWordMutation,
	useGetAllWordsQuery,
} from 'src/redux/index.endpoints'
import { TWord } from 'src/redux/allWords/Allwords.types'

const Words: React.FC = () => {
	const { data, isLoading } = useGetAllWordsQuery()
	const [deleteWord] = useDeleteWordMutation()

	const onClickRemoveWord = (id: string) => {
		deleteWord(id)
		message.success('Deleted successfully!')
	}

	const columns = [
		{
			title: 'Sóz',
			dataIndex: 'sóz',
			key: 'sóz',
			render: (_: void, r: TWord) => <>{r.title[0].latin}</>,
		},
		{
			title: 'Сөз',
			dataIndex: 'сөз',
			key: 'сөз',
			render: (_: void, r: TWord) => <>{r.title[0].kiril}</>,
		},
		{
			title: 'Description latin',
			dataIndex: 'latin',
			key: 'latin',
			render: (_: void, r: TWord) => <>{r.description[0].latin}</>,
		},
		{
			title: 'Description kiril',
			dataIndex: 'kiril',
			key: 'kiril',
			render: (_: void, r: TWord) => <>{r.description[0].kiril}</>,
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			render: (_: void, r: TWord) => <>{r.status_id}</>,
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			render: (_: any, record: TWord) => (
				<Space size='middle'>
					<UiButton>
						<AiOutlineEdit />
					</UiButton>
					<Popconfirm
						title='Delete the task'
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
		<Spin spinning={isLoading}>
			<div className={styles.root}>
				<div className={styles.head}>
					<h2>Sózler</h2>
					<AddWordForm />
				</div>
				<Table
					pagination={{ position: ['bottomCenter'] }}
					dataSource={data?.data}
					columns={columns}
				></Table>
			</div>
		</Spin>
	)
}
export { Words }
