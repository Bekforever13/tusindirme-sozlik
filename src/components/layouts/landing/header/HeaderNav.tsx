import { Link, useNavigate } from "react-router-dom"
import styles from './Header.module.scss'

const HeaderNav: React.FC = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.links}>
			<Link to='/'>Bas bet</Link>
			<Link to='/wordslist'>Sózler dizimi</Link>
			<a
				href='#about'
				onClick={() => {
					return navigate('/', { replace: true })
				}}
			>
				Baģdarlama haqqında
			</a>
			<Link to='/auth'>Admin</Link>
		</div>
	)
}
export { HeaderNav }
