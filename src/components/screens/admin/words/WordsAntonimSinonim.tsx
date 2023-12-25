import { Modal } from 'antd'
import { FC, useEffect } from 'react'
import styles from './Words.module.scss'
import { SearchNSelect } from './SearchNSelect'
import { useSelectors } from 'src/hooks/useSelectors'
import {
	useCreateAntonimsMutation,
	useCreateSinonimsMutation,
} from 'src/redux/index.endpoints'
import { useActions } from 'src/hooks/useActions'

const WordsAntonimSinonim: FC = () => {
	const { selectedAntonims, selectedSinonims, currentWord, AntSinModal } =
		useSelectors()
	const { setCurrentWord, setAntSinModal } = useActions()
	const [createAntonims] = useCreateAntonimsMutation()
	const [createSinonim] = useCreateSinonimsMutation()

	const handleCancel = () => setAntSinModal(false)

	const handleOk = () => {
		if (selectedAntonims.length) {
			createAntonims({
				word_id: currentWord.id,
				antonym_id: selectedAntonims.map(el => el.value),
			})
		}
		if (selectedSinonims.length) {
			createSinonim({
				word_id: currentWord.id,
				synonym_id: selectedSinonims.map(el => el.value),
			})
		}
		setAntSinModal(false)
	}

	useEffect(() => {
		if (!AntSinModal) {
			setCurrentWord({
				id: 0,
				category_id: 0,
				category: { latin: '', kiril: '' },
				title: { latin: '', kiril: '' },
				description: { latin: '', kiril: '' },
				antonym: [],
				synonym: [],
				is_correct: false,
				quantity: '',
			})
		}
	}, [AntSinModal])

	return (
		<Modal
			title='Антонимы и Синонимы'
			open={AntSinModal}
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
