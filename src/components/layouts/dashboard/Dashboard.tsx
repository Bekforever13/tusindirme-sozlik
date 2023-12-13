import React from 'react'
import { Menu } from './Menu/Menu'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.scss'
import { useCheckUserQuery } from 'src/redux/index.endpoints'

const Admin: React.FC = () => {
	const token = localStorage.getItem('token')
	const navigate = useNavigate()
	const { data } = useCheckUserQuery()

	React.useEffect(() => {
		if (!token) navigate('/auth', { replace: true })
	}, [token, data])

	return (
		<div className={styles.root}>
			<Menu />
			<div className={styles.main}>
				<Outlet />
			</div>
		</div>
	)
}
export { Admin }
