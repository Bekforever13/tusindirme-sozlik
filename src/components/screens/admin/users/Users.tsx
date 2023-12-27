import React, { useEffect } from 'react'
import styles from './Users.module.scss'
import { UsersTable } from './UsersTable'
import { useActions } from 'src/hooks/useActions'
import { DashboardHead } from 'src/components/shared/Dashboard/DashboardHead/DashboardHead'
import { UserForm } from 'src/components/shared/Dashboard/UserForm/UserForm'
import { useSelectors } from 'src/hooks/useSelectors'
import { useNavigate } from 'react-router-dom'

const Users: React.FC = () => {
	const navigate = useNavigate()
	const { toggleModalUser } = useActions()
	const { currentUserRole } = useSelectors()

	useEffect(() => {
		if (currentUserRole !== 'super_admin') {
			navigate('/admin/')
		}
	}, [currentUserRole])

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
