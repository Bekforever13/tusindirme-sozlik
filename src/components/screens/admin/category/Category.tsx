import React from 'react'
import styles from './Category.module.scss'
import { CategoryTable } from './CategoryTable'
import { CategoryForm } from 'src/components/shared/Dashboard/CategoryForm/CategoryForm'
import { DashboardHead } from 'src/components/shared/Dashboard/DashboardHead/DashboardHead'
import { useActions } from 'src/hooks/useActions'

const Category: React.FC = () => {
	const { toggleModalCategory } = useActions()

	return (
		<div className={styles.root}>
			<DashboardHead
				title='Все категории'
				buttonText='Добавить категорию'
				handleClick={() => toggleModalCategory(true)}
			/>
			<CategoryTable />
			<CategoryForm />
		</div>
	)
}
export { Category }
