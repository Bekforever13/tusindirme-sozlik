import React from 'react'
import { Popconfirm, Space, Table, message } from 'antd'
import styles from './_Types.module.scss'
import { UiButton } from 'src/components/ui/button/UiButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { _TypesForm } from './_TypesForm'
import { useActions } from 'src/hooks/useActions'
import { TType } from 'src/redux/types/_Types.types'
import {
	useDeleteTypeMutation,
	useGetAllTypesQuery,
} from 'src/redux/index.endpoints'

const _Types: React.FC = () => {
	const { data, isLoading } = useGetAllTypesQuery()
	const { toggleModalType, setTypeToEdit } = useActions()
	const [deleteType] = useDeleteTypeMutation()

	const onClickRemoveCategory = (id: string) => {
		deleteType(id)
		message.success('Deleted successfully!')
	}
	const handleEditButtonClick = (record: TType) => {
		setTypeToEdit(record)
		toggleModalType(true)
	}

	const dataSource = data?.data.map(item => ({ ...item, key: item.id }))

	const columns = [
		{
			title: 'Latin',
			dataIndex: 'latin',
			key: 'latin',
			render: (_: void, r: TType) => <>{r.title_latin}</>,
		},
		{
			title: 'Kiril',
			dataIndex: 'kiril',
			key: 'kiril',
			render: (_: void, r: TType) => <>{r.title_kiril}</>,
		},
		{
			title: 'Actions',
			key: 'action',
			render: (_: void, record: TType) => (
				<Space size='middle'>
					<UiButton onClick={() => handleEditButtonClick(record)}>
						<AiOutlineEdit />
					</UiButton>
					<Popconfirm
						title='Delete the word'
						description='Are you sure to delete this type?'
						onConfirm={() => onClickRemoveCategory(record.id)}
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
				<h2>Kategoriya</h2>
				<UiButton onClick={() => toggleModalType(true)}>Add Category</UiButton>
				<_TypesForm />
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

export { _Types }
