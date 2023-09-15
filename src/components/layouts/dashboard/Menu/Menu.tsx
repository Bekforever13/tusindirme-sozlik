import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { Popconfirm } from 'antd'
import { useActions } from 'src/hooks/useActions'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Menu.module.scss'
import { MenuAdmin } from './MenuAdmin'
import { MenuTester } from './MenuTester'
import { MenuCopywriter } from './MenuCopywriter'

const Menu: React.FC = () => {
	const { removeToken } = useActions()
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
			{pathname.includes('copywriter') && <MenuCopywriter />}
			{pathname.includes('tester') && <MenuTester />}
			<div>
				<FiLogOut />
				<Popconfirm
					title='Are you sure to logout'
					onConfirm={handleClickLogout}
				>
					Logout
				</Popconfirm>
			</div>
		</div>
	)
}
export { Menu }
