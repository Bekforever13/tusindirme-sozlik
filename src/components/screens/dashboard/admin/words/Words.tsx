import React from 'react'
import styles from './Words.module.scss'
import { WordsTable } from './WordsTable'
import { DashboardHead } from 'src/components/shared/Dashboard/DashboardHead/DashboardHead'
import { WordForm } from 'src/components/shared/Dashboard/WordForm/WordForm'
import { useActions } from 'src/hooks/useActions'

const Words: React.FC = () => {
	const { toggleModalWord } = useActions()

	return (
		<div className={styles.root}>
			<DashboardHead
				title='Sózler'
				buttonText='Add word'
				handleClick={() => toggleModalWord(true)}
			/>
			<WordsTable />
			<WordForm />
		</div>
	)
}
export { Words }
