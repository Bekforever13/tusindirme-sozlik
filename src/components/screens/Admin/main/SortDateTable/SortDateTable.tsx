import React from 'react'
import { Spin, Table, Tag } from 'antd'
import styles from './SortDateTable.module.scss'
import { TWord } from 'src/redux/allWords/Allwords.types'
import { useGetAllWordsQuery } from 'src/redux/index.endpoints'
import { useActions } from 'src/hooks/useActions'
import { WordForm } from 'src/components/shared/WordForm/WordForm'
import { UiButton } from 'src/components/ui/button/UiButton'

const SortDateTable: React.FC = () => {
	const { data, isLoading } = useGetAllWordsQuery()
	const { toggleModalWord } = useActions()
	const dataSource = data?.data.map((item: TWord) => ({
		...item,
		key: item.id,
	}))

	const columns = [
		{
			title: 'Latin',
			dataIndex: 'title_latin',
			key: 'title_latin',
		},
		{
			title: 'Kiril',
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
			render: (_: any, record: TWord) => {
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
	]

	return (
		<Spin spinning={isLoading}>
			<div className={styles.root}>
				<div className={styles.head}>
					<h2>Sózler</h2>
					<UiButton onClick={() => toggleModalWord(true)}>Add word</UiButton>
					<WordForm />
				</div>
				<Table
					pagination={{ position: ['bottomCenter'] }}
					dataSource={dataSource}
					columns={columns}
				></Table>
			</div>
		</Spin>
	)
}
export { SortDateTable }
