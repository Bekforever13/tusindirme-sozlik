import { Link, useLocation } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import styles from './Menu.module.scss'

const MenuTester: React.FC = () => {
	const { pathname } = useLocation()
	return (
		<div
			className={
				pathname.includes('tester') ? styles.active : styles.notActive
			}
		>
			<AiOutlineHome />
			<Link to='/dashboard/tester'>Home</Link>
		</div>
	)
}
export { MenuTester }
