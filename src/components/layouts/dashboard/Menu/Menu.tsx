import React from 'react'
import { FiLogOut, FiUsers } from 'react-icons/fi'
import { Popconfirm } from 'antd'
import { useActions } from 'src/hooks/useActions'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Menu.module.scss'
import { MenuAdmin } from './MenuAdmin'
import { useSelectors } from 'src/hooks/useSelectors'

const Menu: React.FC = () => {
	const { removeToken } = useActions()
	const { currentUserRole } = useSelectors()
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const handleClickLogout = () => {
		localStorage.clear()
		removeToken()
		navigate('/auth')
	}

	return (
		<div className={styles.menu}>
			{pathname.includes('admin') && <MenuAdmin />}
			{currentUserRole === 'super_admin' && (
				<div
					onClick={() => navigate('/admin/users')}
					className={
						pathname === '/admin/users' ? styles.active : styles.notActive
					}
				>
					<FiUsers /> Админы
				</div>
			)}
			<Popconfirm title='Are you sure to logout' onConfirm={handleClickLogout}>
				<div>
					<FiLogOut />
					Выйти
				</div>
			</Popconfirm>
		</div>
	)
}
export { Menu }
