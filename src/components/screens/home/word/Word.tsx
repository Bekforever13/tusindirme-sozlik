import { BsShareFill } from 'react-icons/bs'
import styles from './Word.module.scss'
import { useParams } from 'react-router-dom'
import { useGetUserWordQuery } from 'src/redux/index.endpoints'
import React from 'react'
import { Antonim } from './antonim/Antonim'
import { Sinonim } from './sinonim/Sinonim'

const Word: React.FC = () => {
	const params = useParams()
	const { data } = useGetUserWordQuery(params.id)
	const lang = localStorage.getItem('lang')

	return (
		<div className={styles.root}>
			<div className={styles.word}>
				<h2>
					{lang === 'QQ' ? data?.data.title_latin : data?.data.title_kiril}
				</h2>
				<span>
					<BsShareFill />
				</span>
			</div>
			<div className={styles.type}>Kelbetlik</div>
			<div className={styles.desc}>
				{lang === 'QQ'
					? data?.data.description_latin
					: data?.data.description_kiril}
			</div>
			<div className={styles.common}>
				<Antonim />
				<Sinonim />
				{/* <div className={styles.commonType}>
					<span>{t('uqsasSozler')}</span>
					<ul>
						<li>Abadan</li>
						<li>Abadanshılıq</li>
						<li>Abay</li>
					</ul>
				</div> */}
			</div>
		</div>
	)
}
export { Word }
