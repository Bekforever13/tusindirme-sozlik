import { useTranslation } from 'react-i18next'
import styles from '../Word.module.scss'
import { Link, useParams } from 'react-router-dom'
import { useGetUserWordQuery } from 'src/redux/index.endpoints'

const Sinonim: React.FC = () => {
	const params = useParams()
	const { data } = useGetUserWordQuery(params.id)
	const { t } = useTranslation()
	const lang = localStorage.getItem('lang')

	if (data?.data?.rank[1]?.Sinonim ?? data?.data?.rank[0]?.Sinonim) {
		return (
			<div className={styles.commonType}>
				<span>{t('sinonim')}</span>
				<ul>
					{(data?.data?.rank[1]?.Sinonim || data?.data?.rank[0]?.Sinonim)?.map(
						item => {
							return (
								<Link to={`/${item.id}`} key={item.id}>
									{lang === 'QQ' ? item.title_latin : item.title_kiril}
								</Link>
							)
						}
					)}
				</ul>
			</div>
		)
	}

	return null
}
export { Sinonim }
