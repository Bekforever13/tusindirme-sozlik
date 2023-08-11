import React from 'react'
import styles from './Types.module.scss'
import { TypesTable } from './TypesTable'
import { TypesForm } from './TypesForm'
import { DashboardHead } from 'src/components/shared/Dashboard/DashboardHead/DashboardHead'
import { useActions } from 'src/hooks/useActions'

const Types: React.FC = () => {
	const { toggleModalType } = useActions()

	return (
		<div className={styles.root}>
			<DashboardHead
				title='Types'
				buttonText='Add type'
				handleClick={() => toggleModalType(true)}
			/>
			<TypesTable />
			<TypesForm />
		</div>
	)
}

export { Types }
