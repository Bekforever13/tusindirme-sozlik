import { Link } from "react-router-dom"
import logo from 'src/assets/images/footer_logo.svg'
import styles from './Footer.module.scss'

const FooterLogo: React.FC = () => {
	return (
		<Link to='/' className={styles.logo}>
			<img src={logo} />
			<span>Túsindirme sózlik</span>
		</Link>
	)
}
export { FooterLogo }
