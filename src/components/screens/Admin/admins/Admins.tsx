import React from 'react'
import styles from './Admins.module.scss'
import { Space, Table } from 'antd'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { UiButton } from 'src/components/ui/button/UiButton'
import { TAdmin } from 'src/redux/admins/Admins.types'
import { useGetAllAdminsQuery } from 'src/redux/index.endpoints'

const columns = [
	{ title: 'id', dataIndex: 'id', key: 'id' },
	{ title: 'Name', dataIndex: 'name', key: 'name' },
	{ title: 'Phone', dataIndex: 'phone', key: 'phone' },
	{ title: 'Role', dataIndex: 'role', key: 'role' },
	{
		title: 'Actions',
		key: 'aciton',
		render: (_: void, r: TAdmin) => {
			return (
				<Space size='middle'>
					<UiButton>
						<AiOutlineEdit />
					</UiButton>
					<UiButton>
						<BsTrash />
					</UiButton>
				</Space>
			)
		},
	},
]

const Admins: React.FC = () => {
	const { data, isLoading } = useGetAllAdminsQuery()
	const dataSource = data?.data.map(item => ({ ...item, key: item.id }))

	return (
		<div className={styles.root}>
			<div className={styles.head}>
				<h2>Admins</h2>
				<UiButton>Add admin</UiButton>
			</div>
			<Table
				loading={isLoading}
				pagination={{ position: ['bottomCenter'] }}
				// dataSource={dataSource}
				columns={columns}
			/>
		</div>
	)
}
export { Admins }
