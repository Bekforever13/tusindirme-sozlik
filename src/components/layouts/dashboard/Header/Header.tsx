import { Search } from 'src/components/shared/search/Search'
import logo from 'src/assets/images/header_logo.svg'
import styles from './Header.module.scss'
import { useParams } from 'react-router-dom'

const Header: React.FC = () => {
	const params = useParams()

	return (
		<div className={styles.header}>
			<img width={50} height={50} src={logo} alt='logo' />
			<h2>{params.role === 'admin' && 'ADMIN'}</h2>
			<h2>{params.role === 'tester' && 'TESTER'}</h2>
			<h2>{params.role === 'copywriter' && 'COPYWRITER'}</h2>
			{params.role === 'admin' && <Search />}
		</div>
	)
}
export { Header }
