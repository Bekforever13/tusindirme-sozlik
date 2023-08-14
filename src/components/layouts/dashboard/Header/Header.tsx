import { Search } from 'src/components/shared/search/Search'
import logo from 'src/assets/images/header_logo.svg'
import styles from './Header.module.scss'
import { useCustomGetRole } from 'src/hooks/useCustomGetRole'

const Header: React.FC = () => {
	const role = useCustomGetRole(11)

	return (
		<div className={styles.header}>
			<img width='50px' src={logo} />
			<h2>{role.includes('admin') && 'ADMIN'}</h2>
			<h2>{role.includes('tester') && 'TESTER'}</h2>
			<h2>{role.includes('copywriter') && 'COPYWRITER'}</h2>
			<Search />
		</div>
	)
}
export { Header }
