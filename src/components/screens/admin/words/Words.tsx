import React from 'react'
import styles from './Words.module.scss'
import { WordsTable } from './WordsTable'
import { DashboardHead } from 'src/components/shared/Dashboard/DashboardHead/DashboardHead'
import { WordForm } from 'src/components/shared/Dashboard/WordForm/WordForm'
import { useActions } from 'src/hooks/useActions'
import { UiInput } from 'src/components/ui/input/UiInput'
import { useSelectors } from 'src/hooks/useSelectors'
import { BsSearch } from 'react-icons/bs'

const Words: React.FC = () => {
	const { toggleModalWord, setWordSearch } = useActions()
	const { wordSearch } = useSelectors()

	return (
		<div className={styles.root}>
			<DashboardHead
				title='Все слова'
				buttonText='Добавить слово'
				handleClick={() => toggleModalWord(true)}
			/>
			<div>
				<UiInput
					value={wordSearch}
					addonAfter={<BsSearch />}
					placeholder='Поиск...'
					onChange={e => setWordSearch(e.target.value)}
				/>
			</div>
			<WordsTable />
			<WordForm />
		</div>
	)
}
export { Words }
