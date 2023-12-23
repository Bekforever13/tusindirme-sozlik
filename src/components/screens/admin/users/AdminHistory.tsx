import { Modal, Table } from 'antd'
import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react'
import { TAdminHistory, THistories } from 'src/redux/Admin/users/Users.types'
import { useGetAdminHistoryQuery } from 'src/redux/index.endpoints'

type props = {
	adminId: number
	isModal: boolean
	setIsModal: Dispatch<SetStateAction<boolean>>
}

const AdminHistory: FC<props> = ({ adminId, isModal, setIsModal }) => {
	const [currentAdminHistory, setCurrentAdminHistory] = useState<THistories>()
	const { data } = useGetAdminHistoryQuery()

	const handleCancel = () => {
		setIsModal(false)
	}

	const columns = [
		{
			title: 'Слово на кириллице',
			dataIndex: 'word.kiril',
			render: (_: any, r: TAdminHistory) => r.word.kiril,
		},
		{
			title: 'Слово на латинице',
			dataIndex: 'word.latin',
			render: (_: any, r: TAdminHistory) => r.word.latin,
		},
		{
			title: 'Статус',
			dataIndex: 'status',
			render: (st: string) => {
				let status = ''
				let color = ''
				if (st === 'updated') {
					status = 'Обновлено'
					color = 'green'
				} else if (st === 'created') {
					status = 'Создано'
					color = 'blue'
				} else if (st === 'deleted') {
					status = 'Удалено'
					color = 'red'
				}
				return (
					<span
						style={{
							background: color,
							padding: '5px 16px',
							fontWeight: '500',
							color: '#fff',
							borderRadius: '16px',
						}}
					>
						{status}
					</span>
				)
			},
		},
		{
			title: 'Дата',
			dataIndex: 'date',
		},
	]

	useEffect(() => {
		data?.data.find(admin =>
			admin.id === adminId ? setCurrentAdminHistory(admin) : ''
		)
	}, [data, adminId])

	return (
		<Modal
			title='История админа'
			open={isModal}
			okButtonProps={{ style: { display: 'none' } }}
			onCancel={handleCancel}
			cancelText='Закрыть'
			style={{ minWidth: '700px' }}
		>
			<Table
				size='small'
				scroll={{ x: true }}
				rowKey={item => item.date!}
				dataSource={currentAdminHistory?.histories}
				columns={columns}
			/>
		</Modal>
	)
}

export { AdminHistory }
