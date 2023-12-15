import { useLocation, useNavigate } from 'react-router-dom'
import { BiCategory } from 'react-icons/bi'
import { MdOutlineTranslate } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import styles from './Menu.module.scss'
import logo from 'src/assets/images/header_logo.svg'

const MenuAdmin: React.FC = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const adminMenuItems = [
		{ pathname: '/admin', icon: <AiOutlineHome />, label: 'Главная' },
		{
			pathname: '/admin/words',
			icon: <MdOutlineTranslate />,
			label: 'Слова',
		},
		{
			pathname: '/admin/category',
			icon: <BiCategory />,
			label: 'Категории',
		},
		{ pathname: '/admin/users', icon: <FiUsers />, label: 'Админы' },
	]

	return (
		<>
			<div onClick={() => navigate('/')} className={styles.img}>
				<img width={50} height={50} src={logo} alt='logo' />
			</div>
			{adminMenuItems.map(item => (
				<div
					key={item.pathname}
					onClick={() => navigate(item.pathname)}
					className={
						pathname === item.pathname ? styles.active : styles.notActive
					}
				>
					{item.icon}
					{item.label}
				</div>
			))}
		</>
	)
}
export { MenuAdmin }
