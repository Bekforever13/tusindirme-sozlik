import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import { useTranslation } from 'react-i18next'

const HeaderNav: React.FC = () => {
	const navigate = useNavigate()
	const { t } = useTranslation()

	return (
		<div className={styles.links}>
			<Link to='/'>{t('home')}</Link>
			<Link to='/wordslist'>{t('wordsList')}</Link>
			<a
				href='#about'
				onClick={() => {
					return navigate('/', { replace: true })
				}}
			>
				{t('about')}
			</a>
			<Link to='/auth'>Admin</Link>
		</div>
	)
}
export { HeaderNav }
