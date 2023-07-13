import React from 'react'
import { SortDateTable } from 'src/components/screens/Admin/main/SortDateTable/SortDateTable'
import { CategoryTable } from 'src/components/screens/Admin/main/CategoryTable/CategoryTable'
import styles from './Main.module.scss'

const Main: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.info}>
				<div className={styles.allWordsCount}>517 soz</div>
				<div className={styles.allCategoriesCount}>10 category</div>
			</div>
			<div className={styles.tables}>
				<SortDateTable />
				<CategoryTable />
			</div>
		</div>
	)
}
export { Main }
