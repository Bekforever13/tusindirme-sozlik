import { Modal } from 'antd'
import { FC, Dispatch, SetStateAction, useEffect } from 'react'
import styles from './Words.module.scss'
import { SearchNSelect } from './SearchNSelect'
import { useSelectors } from 'src/hooks/useSelectors'
import {
	useCreateAntonimsMutation,
	useCreateSinonimsMutation,
	useGetAdminWordInfoQuery,
} from 'src/redux/index.endpoints'
import { useActions } from 'src/hooks/useActions'

type props = {
	isModal: boolean
	setIsModal: Dispatch<SetStateAction<boolean>>
}

const WordsAntonimSinonim: FC<props> = ({ isModal, setIsModal }) => {
	const { selectedAntonims, selectedSinonims, currentWord } = useSelectors()
	const { setCurrentWord } = useActions()
	const { data } = useGetAdminWordInfoQuery(currentWord.id, {
		refetchOnMountOrArgChange: true,
	})
	const [createAntonims] = useCreateAntonimsMutation()
	const [createSinonim] = useCreateSinonimsMutation()

	const handleCancel = () => setIsModal(false)

	const handleOk = () => {
		const filteredAntonims = selectedAntonims.filter(
			item => !data?.data.antonym.some(el => el.id === item.value)
		)
		const filteredSinonim = selectedSinonims.filter(
			item => !data?.data.synonym.some(el => el.id === item.value)
		)
		if (filteredAntonims.length) {
			createAntonims({
				word_id: currentWord.id,
				antonym_id: filteredAntonims.map(el => el.value),
			})
		}
		if (filteredSinonim.length) {
			createSinonim({
				word_id: currentWord.id,
				synonym_id: filteredSinonim.map(el => el.value),
			})
		}
		setIsModal(false)
	}

	useEffect(() => {
		if (!isModal) {
			setCurrentWord({
				category: { latin: '', kiril: '' },
				description: { latin: '', kiril: '' },
				id: 0,
				is_correct: false,
				quantity: '',
				title: { latin: '', kiril: '' },
			})
		}
	}, [isModal])

	return (
		<Modal
			title='Антонимы и Синонимы'
			open={isModal}
			onCancel={handleCancel}
			onOk={handleOk}
			cancelText='Закрыть'
			style={{ minWidth: '700px' }}
		>
			<div className={styles.wrapper}>
				<label>
					Антоним
					<SearchNSelect currentWords='antonim' />
				</label>
				<label>
					Синоним
					<SearchNSelect currentWords='sinonim' />
				</label>
			</div>
		</Modal>
	)
}

export { WordsAntonimSinonim }
