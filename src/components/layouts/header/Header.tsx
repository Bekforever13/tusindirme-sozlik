import React from 'react'
import logo from 'src/assets/images/header_logo.svg'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { Turn as Hamburger } from 'hamburger-react'

const Header: React.FC = () => {
	const [isOpen, setOpen] = React.useState(false)
	return (
		<div className={styles.root}>
			<Link to='/' className={styles.logo}>
				<img src={logo} alt='' />
				<span>Túsindirme sózlik</span>
			</Link>
			<div className={styles.links}>
				<Link to={'/'}>Sózler</Link>
				<Link to={'/'}>Sózler dizimi</Link>
				<Link to={'/'}>Baģdarlama haqqında</Link>
			</div>
			<div className={styles.lang}>QQ</div>
			<div className={styles.hamburger}>
				<Hamburger size={27} toggled={isOpen} toggle={setOpen} direction='left' />
			</div>
			<div className={isOpen ? styles.hLinks : styles.hide}>
				<Link to={'/'}>Sózler</Link>
				<Link to={'/'}>Sózler dizimi</Link>
				<Link to={'/'}>Baģdarlama haqqında</Link>
				<div className={styles.hLang}>QQ</div>
			</div>
		</div>
	)
}

export { Header }
