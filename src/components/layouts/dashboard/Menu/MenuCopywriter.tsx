import { AiOutlineHome } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.scss'

const MenuCopywriter: React.FC = () => {
	const { pathname } = useLocation()
	return (
		<div
			className={
				pathname.includes('copywriter') ? styles.active : styles.notActive
			}
		>
			<AiOutlineHome />
			<Link to='/dashboard/copywriter'>Home</Link>
		</div>
	)
}
export { MenuCopywriter }
