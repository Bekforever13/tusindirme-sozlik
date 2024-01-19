import { Modal, Popconfirm, Space, Typography, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useActions } from 'src/hooks/useActions'
import { useSelectors } from 'src/hooks/useSelectors'
import type { UploadProps } from 'antd'
import Dragger from 'antd/es/upload/Dragger'
import { InboxOutlined } from '@ant-design/icons'
import { UploadFile } from 'antd/lib/upload/interface'
import {
	useCreateAudioMutation,
	useDeleteAudioMutation,
} from 'src/redux/index.endpoints'
import { MdAudioFile } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'

const WordsAudioModal: React.FC = () => {
	const { AudioModal, currentWord } = useSelectors()
	const { setAudioModal } = useActions()
	const [createAudio, { isError: isCreateError, isSuccess: createSuccess }] =
		useCreateAudioMutation()
	const [deleteAudio, { isSuccess: isDeleteSuccess }] = useDeleteAudioMutation()
	const [fileList, setFileList] = useState<UploadFile<any>[]>([])

	const props: UploadProps = {
		accept: 'audio/*',
		fileList: fileList,
		customRequest({ file }) {
			const formData = new FormData()
			formData.append('file', file)
			createAudio({
				id: currentWord.id,
				formData,
			})
		},
	}

	const handleDelete = () => deleteAudio(currentWord.id)

	const handleCancel = () => setAudioModal(false)

	const handleOk = () => setAudioModal(false)

	useEffect(() => {
		if (currentWord?.audio?.length) {
			setFileList([
				{
					uid: '-1',
					name: currentWord.audio.slice(47, currentWord.audio.length),
					status: 'done',
					url: currentWord.audio,
				},
			])
		}
		if (!currentWord?.audio?.length) {
			setFileList([])
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentWord.audio, currentWord.id])

	useEffect(() => {
		if (createSuccess) {
			setAudioModal(false)
		}
	}, [createSuccess])

	useEffect(() => {
		if (isDeleteSuccess) {
			setFileList([])
			setAudioModal(false)
			message.success('Успешно удалено')
		}
	}, [isDeleteSuccess])

	useEffect(() => {
		if (isCreateError) {
			message.error('Размер файла не должен превышать 2048кб')
		}
	}, [isCreateError])

	return (
		<Modal
			title={`Аудио для ${currentWord.title.kiril}`}
			open={AudioModal}
			onCancel={handleCancel}
			onOk={handleOk}
			cancelText='Закрыть'
			style={{ minWidth: '300px' }}
		>
			<Dragger {...props} showUploadList={false}>
				<p className='ant-upload-drag-icon'>
					<InboxOutlined />
				</p>
				<p className='ant-upload-text'>
					Кликните или перетащите сюда аудио файл
				</p>
			</Dragger>
			{Object.values(fileList).map(file => (
				<Space
					direction='vertical'
					style={{ width: '100%', marginTop: '20px' }}
				>
					<Space
						style={{
							backgroundColor: 'rgba(0,0,0,0.1)',
							width: '100%',
							padding: 8,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<MdAudioFile size='20' />
						<Typography>{file.name}</Typography>
						<Popconfirm
							title='Вы действительно хотите удалить аудио?'
							onConfirm={handleDelete}
						>
							<FaRegTrashAlt size='18' style={{ cursor: 'pointer' }} />
						</Popconfirm>
					</Space>
				</Space>
			))}
		</Modal>
	)
}

export { WordsAudioModal }
