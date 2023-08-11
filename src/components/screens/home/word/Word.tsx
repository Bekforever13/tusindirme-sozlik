import { BsShareFill } from 'react-icons/bs'
import styles from './Word.module.scss'
import { useLocation } from 'react-router-dom'
import { useGetUserWordQuery } from 'src/redux/index.endpoints'
import React from 'react'

const Word: React.FC = () => {
	const { pathname } = useLocation()
	const id = pathname.slice(1)
	const { data } = useGetUserWordQuery(id)

	return (
		<div className={styles.root}>
			<div className={styles.word}>
				<h2>{data?.data.title_latin}</h2>
				<span>
					<BsShareFill />
				</span>
			</div>
			<div className={styles.type}>Kelbetlik</div>
			<div className={styles.desc}>{data?.data.description_latin}</div>
			<div className={styles.common}>
				<div className={styles.commonType}>
					<span>Sinonim</span>
					<ul>
						<li>Abadan</li>
						<li>Abadanshılıq</li>
						<li>Abay</li>
					</ul>
				</div>
				<div className={styles.commonType}>
					<span>Antonim </span>
					<ul>
						<li>Abay-sıyasat</li>
						<li>Abaylı</li>
						<li>Abaysız</li>
					</ul>
				</div>
				<div className={styles.commonType}>
					<span>Uqsas sózler</span>
					<ul>
						<li>Abadan</li>
						<li>Abadanshılıq</li>
						<li>Abay</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export { Word }
