import React from 'react'
import styles from './Footer.module.scss'
import { FooterSocial } from './FooterSocial'
import { FooterAndroid } from './FooterAndroid'
import { FooterLogo } from './FooterLogo'

const Footer: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.info}>
				<FooterLogo />
				<FooterAndroid />
				<FooterSocial />
			</div>
			<div className={styles.text}>
				Avtorlıq huqıqı © 2022 Bookie audiokitaplar, "KARSOFT-IT-SOLUTIONS" JSHJ
				• Barlıq huqıqlar qorǵalǵan.
			</div>
		</div>
	)
}

export { Footer }
