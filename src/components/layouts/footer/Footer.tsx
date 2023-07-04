import { RiTelegramLine } from 'react-icons/ri'
import { LiaFacebook } from 'react-icons/lia'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import React from 'react'
import styles from './Footer.module.scss'
import logo from 'src/assets/images/footer_logo.svg'
import android from 'src/assets/images/android.svg'

const Footer: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<img src={logo} alt='Túsindirme sózlik logotip' />
					<span>Túsindirme sózlik</span>
				</div>
				<div>
					<img src={android} alt='play market' />
				</div>
				<div className={styles.social}>
					<LiaFacebook />
					<AiOutlineInstagram />
					<AiOutlineYoutube />
					<RiTelegramLine />
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
