import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BiCategory } from 'react-icons/bi'
import { MdOutlineTranslate } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUsers, FiType } from 'react-icons/fi'
import styles from './Menu.module.scss'
import logo from 'src/assets/images/header_logo.svg'

const MenuAdmin: React.FC = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const adminMenuItems = [
		{ pathname: '/admin', icon: <AiOutlineHome />, label: 'Bas bet' },
		{
			pathname: '/admin/words',
			icon: <MdOutlineTranslate />,
			label: 'Sozler',
		},
		{
			pathname: '/admin/category',
			icon: <BiCategory />,
			label: 'Kategoriyalar',
		},
		{ pathname: '/admin/users', icon: <FiUsers />, label: 'Userler' },
	]

	return (
		<>
			<div onClick={() => navigate('/')} className={styles.img}>
				<img width={50} height={50} src={logo} alt='logo' />
			</div>
			{adminMenuItems.map(item => (
				<div
					key={item.pathname}
					className={
						pathname === item.pathname ? styles.active : styles.notActive
					}
				>
					{item.icon}
					<Link to={item.pathname}>{item.label}</Link>
				</div>
			))}
		</>
	)
}
export { MenuAdmin }
