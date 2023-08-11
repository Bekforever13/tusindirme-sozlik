import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import { Turn as Hamburger } from 'hamburger-react'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNav } from './HeaderNav'
import { HeaderLang } from './HeaderLang'

const Header: React.FC = () => {
	const [isOpen, setOpen] = React.useState(false)
	const navigate = useNavigate()

	return (
		<div className={styles.root}>
			<HeaderLogo />
			<HeaderNav />
			<HeaderLang />
			<div className={styles.hamburger}>
				<Hamburger
					size={27}
					toggled={isOpen}
					toggle={setOpen}
					direction='left'
				/>
			</div>

			{/* ----------- hamburger menu ------------- */}

			<div className={isOpen ? styles.hLinks : styles.hide}>
				<Link onClick={() => setOpen(false)} to='/'>
					Bas bet
				</Link>
				<Link onClick={() => setOpen(false)} to='/wordslist'>
					Sózler dizimi
				</Link>
				<a
					href='#about'
					onClick={() => {
						setOpen(false)
						navigate('/', { replace: true })
					}}
				>
					Baģdarlama haqqında
				</a>
				<Link to='/auth'>Admin</Link>
				<div className={styles.hLang}>QQ</div>
			</div>
		</div>
	)
}

export { Header }
