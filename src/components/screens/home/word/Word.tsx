import { BsShareFill } from 'react-icons/bs'
import styles from './Word.module.scss'
import { useParams } from 'react-router-dom'
import { useGetUserWordQuery } from 'src/redux/index.endpoints'
import React from 'react'
import { Antonim } from './antonim/Antonim'
import { Sinonim } from './sinonim/Sinonim'

const Word: React.FC = () => {
	const { id } = useParams()
	const { data } = useGetUserWordQuery(id!)
	const lang = localStorage.getItem('lang')

	return (
		<div className={styles.root}>
			<div className={styles.word}>
				<h2>
					{lang === 'QQ' ? data?.data.title.latin : data?.data.title.kiril}
				</h2>
				<span>
					{/* <BsShareFill /> */}
				</span>
			</div>
			<div className={styles.type}>Kelbetlik</div>
			<div className={styles.desc}>
				{lang === 'QQ'
					? data?.data.description.latin
					: data?.data.description.kiril}
			</div>
			<div className={styles.common}>
				{/* <Antonim />
				<Sinonim /> */}
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
