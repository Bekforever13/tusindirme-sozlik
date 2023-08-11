import { Link, useLocation } from 'react-router-dom'
import { BiCategory } from 'react-icons/bi'
import { MdOutlineTranslate } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUsers, FiType } from 'react-icons/fi'
import styles from './Menu.module.scss'

const MenuAdmin: React.FC = () => {
	const { pathname } = useLocation()
	const adminMenuItems = [
		{ pathname: '/dashboard/admin', icon: <AiOutlineHome />, label: 'Home' },
		{
			pathname: '/dashboard/admin/words',
			icon: <MdOutlineTranslate />,
			label: 'Words',
		},
		{
			pathname: '/dashboard/admin/category',
			icon: <BiCategory />,
			label: 'Category',
		},
		{ pathname: '/dashboard/admin/types', icon: <FiType />, label: 'Types' },
		{ pathname: '/dashboard/admin/users', icon: <FiUsers />, label: 'Users' },
	]

	return (
		<>
			{adminMenuItems.map(item => {
				return (
					<div
						key={item.pathname}
						className={pathname === item.pathname ? styles.active : styles.notActive}
					>
						{item.icon}
						<Link to={item.pathname}>{item.label}</Link>
					</div>
				)
			})}
		</>
	)
}
export { MenuAdmin }
