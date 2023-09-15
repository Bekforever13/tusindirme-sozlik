import { Link } from 'react-router-dom'
import logo from 'src/assets/images/footer_logo.svg'
import styles from './Footer.module.scss'

const FooterLogo: React.FC = () => {
	return (
		<Link to='/' className={styles.logo}>
			<img width={28} height={28} src={logo} alt='logo' />
			<span>Túsindirme sózlik</span>
		</Link>
	)
}
export { FooterLogo }
