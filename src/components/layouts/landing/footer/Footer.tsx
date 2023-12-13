import React from 'react'
import styles from './Footer.module.scss'
import { FooterSocial } from './FooterSocial'
import { FooterAndroid } from './FooterAndroid'
import { FooterLogo } from './FooterLogo'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.info}>
				<FooterLogo />
				<FooterAndroid />
				<FooterSocial />
			</div>
			<div className={styles.text}>
				Avtorlıq huqıqı © 2022 Bookie audiokitaplar,{' '}
				<Link to='/auth'>"KARSOFT-IT-SOLUTIONS"</Link> JSHJ • Barlıq huqıqlar
				qorǵalǵan.
			</div>
		</div>
	)
}

export { Footer }
