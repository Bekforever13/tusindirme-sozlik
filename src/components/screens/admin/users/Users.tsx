import React from 'react'
import styles from './Users.module.scss'

import { UsersTable } from './UsersTable'
import { useActions } from 'src/hooks/useActions'
import { DashboardHead } from 'src/components/shared/Dashboard/DashboardHead/DashboardHead'
import { UserForm } from 'src/components/shared/Dashboard/UserForm/UserForm'

const Users: React.FC = () => {
	const { toggleModalUser } = useActions()

	return (
		<div className={styles.root}>
			<DashboardHead
				title='Админы'
				buttonText='Добавить нового админа'
				handleClick={() => toggleModalUser(true)}
			/>
			<UsersTable />
			<UserForm />
		</div>
	)
}
export { Users }
