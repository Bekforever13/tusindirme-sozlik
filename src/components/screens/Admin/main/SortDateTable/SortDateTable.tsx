import React from 'react'
import styles from './SortDateTable.module.scss'
import { Table, Tag } from 'antd'
import { TWord } from 'src/redux/allWords/Allwords.types'
import { useGetAllWordsQuery } from 'src/redux/index.endpoints'
import { useActions } from 'src/hooks/useActions'
import { WordForm } from 'src/components/shared/WordForm/WordForm'
import { UiButton } from 'src/components/ui/button/UiButton'
import { StatusTag } from 'src/components/shared/tag/StatusTag'

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
			render: (_: void, record: TWord) => <StatusTag type={record.status} />,
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
				loading={isLoading}
				pagination={{ position: ['bottomCenter'] }}
				dataSource={dataSource}
				columns={columns}
			/>
		</div>
	)
}
export { SortDateTable }
