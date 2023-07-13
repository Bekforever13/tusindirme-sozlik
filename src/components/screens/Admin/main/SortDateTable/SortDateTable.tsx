import React from 'react'
import { Spin, Table } from 'antd'
import styles from './SortDateTable.module.scss'
import { TWord } from 'src/redux/allWords/Allwords.types'
import { useGetAllWordsQuery } from 'src/redux/index.endpoints'
import { useActions } from 'src/hooks/useActions'
import { AddWordForm } from 'src/components/shared/AddWordForm/AddWordForm'

const SortDateTable: React.FC = () => {
	const { data, isSuccess, isLoading } = useGetAllWordsQuery()
	const { getAllWords } = useActions()

	const columns = [
		{
			title: 'Latin',
			dataIndex: 'latin',
			key: 'latin',
			render: (_: void, r: TWord) => <>{r.title[0].latin}</>,
		},
		{
			title: 'Kiril',
			dataIndex: 'kiril',
			key: 'kiril',
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
			dataIndex: 'status_id',
			key: 'status_id',
			render: (_: void, r: TWord) => <>{r.status_id}</>,
		},
	]

	React.useEffect(() => {
		if (isSuccess) {
			getAllWords(data.data)
		}
	}, [isSuccess])

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
export { SortDateTable }
