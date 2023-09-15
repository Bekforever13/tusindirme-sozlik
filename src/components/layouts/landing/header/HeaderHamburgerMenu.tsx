import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
type THamburgerMenuProps = {
	isOpen: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

const HeaderHamburgerMenu: React.FC<THamburgerMenuProps> = ({
	isOpen,
	setOpen,
}) => {
	const navigate = useNavigate()
	const { t } = useTranslation()

	return (
		<div className={isOpen ? styles.hLinks : styles.hide}>
			<Link onClick={() => setOpen(false)} to='/'>
				{t('home')}
			</Link>
			<Link onClick={() => setOpen(false)} to='/wordslist'>
				{t('wordsList')}
			</Link>
			<a
				href='#about'
				onClick={() => {
					setOpen(false)
					navigate('/', { replace: true })
				}}
			>
				{t('about')}
			</a>
			<Link to='/auth'>Admin</Link>
			<div className={styles.hLang}>QQ</div>
		</div>
	)
}
export { HeaderHamburgerMenu }
