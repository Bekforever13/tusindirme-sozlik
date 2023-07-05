import { RiTelegramLine } from 'react-icons/ri'
import { LiaFacebook } from 'react-icons/lia'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import React from 'react'
import styles from './Footer.module.scss'
import logo from 'src/assets/images/footer_logo.svg'
import android from 'src/assets/images/android.svg'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.info}>
				<Link to='/' className={styles.logo}>
					<img src={logo} alt='Túsindirme sózlik logotip' />
					<span>Túsindirme sózlik</span>
				</Link>
				<Link to='https://play.google.com/' target='_blank'>
					<img src={android} alt='play market' />
				</Link>
				<div className={styles.social}>
					<Link to='https://facebook.com' target='_blank'>
						<LiaFacebook />
					</Link>
					<Link to='https://instagram.com/karsoftuz' target='_blank'>
						<AiOutlineInstagram />
					</Link>
					<Link
						to='https://www.youtube.com/@bookieqaraqalpaq/featured'
						target='_blank'
					>
						<AiOutlineYoutube />
					</Link>
					<Link to='https://t.me/karsoft_bot' target='_blank'>
						<RiTelegramLine />
					</Link>
				</div>
			</div>
			<div className={styles.text}>
				Avtorlıq huqıqı © 2022 Bookie audiokitaplar, "KARSOFT-IT-SOLUTIONS" JSHJ
				• Barlıq huqıqlar qorǵalǵan.
			</div>
		</div>
	)
}

export { Footer }
