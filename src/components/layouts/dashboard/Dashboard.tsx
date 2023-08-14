import React from 'react'
import { Menu } from './Menu/Menu'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.scss'
import { Header } from './Header/Header'
import { useCheckUserQuery } from 'src/redux/index.endpoints'

const Admin: React.FC = () => {
	const token = localStorage.getItem('token')
	const navigate = useNavigate()
	const { data, isSuccess: checkUserIsSuccess } = useCheckUserQuery()

	React.useEffect(() => {
		if (!token) navigate('/auth', { replace: true })
	}, [token, data])

	React.useEffect(() => {
		if (token && checkUserIsSuccess) {
			const role = data?.data.role
			switch (role) {
				case 'admin':
					navigate('/dashboard/admin', { replace: true })
					break
				case 'copywriter':
					navigate('/dashboard/copywriter', { replace: true })
					break
				case 'tester':
					navigate('/dashboard/tester', { replace: true })
					break
				case 'user':
					navigate('/', { replace: true })
					break
			}
		}
	}, [checkUserIsSuccess, data])

	return (
		<div className={styles.root}>
			<Menu />
			<div className={styles.main}>
				<Header />
				<Outlet />
			</div>
		</div>
	)
}
export { Admin }
