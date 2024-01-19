import { useTranslation } from 'react-i18next'
import styles from '../Word.module.scss'
import { Link, useParams } from 'react-router-dom'
import { useGetUserWordQuery } from 'src/redux/index.endpoints'

const Sinonim: React.FC = () => {
	const { id } = useParams()
	const { data } = useGetUserWordQuery(id!)
	const { t } = useTranslation()
	const lang = localStorage.getItem('lang')

	return (
		<div className={styles.commonType}>
			<span>{t('sinonim')}</span>
			<ul>
				{data?.data?.synonym?.length ? (
					data?.data?.synonym?.map(item => {
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
export { Sinonim }
