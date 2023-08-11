import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { Popconfirm } from 'antd'
import { useActions } from 'src/hooks/useActions'
import { useNavigate } from 'react-router-dom'
import styles from './Menu.module.scss'
import { MenuAdmin } from './MenuAdmin'
import { MenuTester } from './MenuTester'
import { MenuCopywriter } from './MenuCopywriter'
import { useCustomGetRole } from 'src/hooks/useCustomGetRole'

const Menu: React.FC = () => {
	const { removeToken } = useActions()
	const navigate = useNavigate()
	const role = useCustomGetRole()

	const handleClickLogout = () => {
		localStorage.clear()
		removeToken()
		navigate('/auth')
	}

	return (
		<div className={styles.menu}>
			{role.includes('admin') && <MenuAdmin />}
			{role.includes('copywriter') && <MenuCopywriter />}
			{role.includes('tester') && <MenuTester />}
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
