import React from 'react'
import { Space, Table } from 'antd'
import styles from './Admins.module.scss'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

const { Column } = Table

interface DataType {
	key: number
	id: number
	name: string
	phone: string
	role: string
}

const data: DataType[] = [
	{
		key: 1,
		id: 1,
		name: 'Beka',
		phone: '+99890-422-13-42',
		role: 'Admin'
	},
]

const Admins: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.head}>
				<h2>Admins</h2>
				<UiButton>Add admin</UiButton>
			</div>
			<Table pagination={{ position: ['bottomCenter'] }} dataSource={data}>
				<Column title='ID' dataIndex='id' key='id' />
				<Column title='Name' dataIndex='name' key='name' />
				<Column title='Phone' dataIndex='phone' key='phone' />
				<Column title='Role' dataIndex='role' key='role' />
				<Column
					title='Action'
					key='action'
					render={(_: any, record: DataType) => (
						<Space size='middle'>
							<UiButton>
								<AiOutlineEdit />
							</UiButton>
							<UiButton>
								<BsTrash />
							</UiButton>
						</Space>
					)}
				/>
			</Table>
		</div>
	)
}
export { Admins }
