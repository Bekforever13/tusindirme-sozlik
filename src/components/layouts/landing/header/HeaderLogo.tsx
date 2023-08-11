import { Link } from 'react-router-dom'
import logo from 'src/assets/images/header_logo.svg'
import styles from './Header.module.scss'
import React from 'react'

const HeaderLogo: React.FC = () => {
	return (
		<Link to='/' className={styles.logo}>
			<img src={logo} alt='' />
			<span>Túsindirme sózlik</span>
		</Link>
	)
}
export { HeaderLogo }
