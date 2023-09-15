import { BsArrowRight } from 'react-icons/bs'
import styles from './Frame.module.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Frame: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.root}>
			<div className={styles.title}>{t('iframeTitle')}</div>
			<div className={styles.frameWrapper}>
				<div className={styles.frame}>
					<iframe
						loading='lazy'
						src='https://www.youtube.com/embed/UT9ndxZPXxY'
						title='Túsindirme sózlik mobil qosımshası haqqında'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					/>
				</div>
				<div className={styles.card}>
					<h3>{t('iframeCardTitle')}</h3>
					<p>{t('iframeCardDescription')}</p>
					<Link to='/' className={styles.link}>
						{t('iframeCardCheck')} <BsArrowRight />
					</Link>
				</div>
			</div>
		</div>
	)
}
export { Frame }
