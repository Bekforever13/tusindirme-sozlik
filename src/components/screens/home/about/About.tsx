import React from 'react'
import styles from './About.module.scss'
import logo from 'src/assets/images/logo_about.svg'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.root} id='about'>
			<div className={styles.title}>{t('aboutTitle')}</div>
			<div className={styles.about}>
				<div className={styles.text}>
					<div className={styles.aboutTitle}>
						<div>Túsindirme sózlik</div>
					</div>
					<div className={styles.about_desc}>
						<span>{t('aboutDescription1')}</span>
						<span>
							<Link to='https://tusindirmesozlik.uz/'>Tusindirmesozlik.uz</Link>
							{t('aboutDescription2')}
						</span>
					</div>
				</div>
				<div className={styles.about_logo}>
					<img width={130} height={155} src={logo} alt='logo' />
				</div>
			</div>
		</div>
	)
}

export { About }
