import { useTranslation } from 'react-i18next'
import styles from '../Word.module.scss'
import { Link, useParams } from 'react-router-dom'
import { useGetUserWordQuery } from 'src/redux/index.endpoints'

const Antonim: React.FC = () => {
	const { id } = useParams()
	const { data } = useGetUserWordQuery(id!)
	const { t } = useTranslation()
	const lang = localStorage.getItem('lang')

	return (
		<div className={styles.commonType}>
			<span>{t('antonim')}</span>
			<ul>
				{data?.data?.antonym?.length ? (
					data?.data?.antonym.map(item => {
						return (
							<Link to={`/${item.id}`} key={item.id}>
								{lang === 'QQ' ? item.title.latin : item.title.kiril}
							</Link>
						)
					})
				) : (
					<p>{t('empty')}</p>
				)}
			</ul>
		</div>
	)
}
export { Antonim }
