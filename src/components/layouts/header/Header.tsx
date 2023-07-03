import React from 'react'
import logo from '../../../assets/images/header_logo.svg'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header: React.FC = () => {
	return (
		<div className={styles.root}>
			<Link to={'/'} className={styles.logo}>
				<img src={logo} alt='' />
				<span>Túsindirme sózlik</span>
			</Link>
			<div className={styles.links}>
				<Link to={'/'}>Sózler</Link>
				<Link to={'/'}>Sózler dizimi</Link>
				<Link to={'/'}>Baģdarlama haqqında</Link>
			</div>
			<div className={styles.lang}>QQ</div>
		</div>
	)
}

export default Header
