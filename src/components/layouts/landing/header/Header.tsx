import React from 'react'
import styles from './Header.module.scss'
import { Turn as Hamburger } from 'hamburger-react'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNav } from './HeaderNav'
import { HeaderLang } from './HeaderLang'
import { HeaderHamburgerMenu } from './HeaderHamburgerMenu'

const Header: React.FC = () => {
	const [isOpen, setOpen] = React.useState(false)

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
			<HeaderHamburgerMenu isOpen={isOpen} setOpen={setOpen} />
		</div>
	)
}

export { Header }
