import { useEffect } from 'react'
import styles from './Header.module.scss'
import { useTranslation } from 'react-i18next'

const HeaderLang: React.FC = () => {
	const { i18n } = useTranslation()
	
	useEffect(() => {
		if (localStorage.getItem('lang') === null) {
			localStorage.setItem('lang', 'QQ')
		}
	}, [])
	
	const lang = localStorage.getItem('lang')
	const checkLang = i18n.language === 'QQ' ? 'KK' : 'QQ'

	const handleClickLang = () => {
		localStorage.setItem('lang', checkLang)
		i18n.changeLanguage(checkLang)
	}

	return (
		<div onClick={handleClickLang} className={styles.lang}>
			{lang ? lang : 'QQ'}
		</div>
	)
}
export { HeaderLang }
