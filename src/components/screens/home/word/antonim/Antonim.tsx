import { useTranslation } from 'react-i18next'
import styles from '../Word.module.scss'
import { Link, useParams } from 'react-router-dom'
import { useGetUserWordQuery } from 'src/redux/index.endpoints'

const Antonim: React.FC = () => {
	const params = useParams()
	const { data } = useGetUserWordQuery(params.id)
	const { t } = useTranslation()
	const lang = localStorage.getItem('lang')

	if (data?.data?.rank[0]?.Antonim) {
		return (
			<div className={styles.commonType}>
				<span>{t('sinonim')}</span>
				<ul>
					{data?.data?.rank[0]?.Antonim?.map(item => {
						return (
							<Link to={`/${item.id}`} key={item.id}>
								{lang === 'QQ' ? item.title_latin : item.title_kiril}
							</Link>
						)
					})}
				</ul>
			</div>
		)
	}

	return null
}
export { Antonim }
