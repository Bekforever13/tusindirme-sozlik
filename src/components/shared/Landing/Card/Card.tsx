import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
import { BsArrowRight } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { TUserCardPropType } from 'src/redux/User/User.types'

const Card: React.FC<TUserCardPropType> = props => {
	const { title, words } = props
	const lang = localStorage.getItem('lang')
	const { t } = useTranslation()

	const scroll = () => window.scrollTo(0, 0)

	return (
		<div className={styles.root}>
			<h3>{title}</h3>
			<div className={styles.words}>
				{words?.map(item => {
					return (
						<Link key={item.id} onClick={scroll} to={`/${item.id}`}>
							{lang === 'QQ' ? item.title_latin : item.title_kiril}
						</Link>
					)
				})}
			</div>
			<Link to='/' className={styles.linkToAll}>
				<span>{t('checkAllWords')}</span>
				<BsArrowRight />
			</Link>
		</div>
	)
}

export { Card }
