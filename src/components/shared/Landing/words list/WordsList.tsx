import React from 'react'
import { Pagination } from 'antd'
import styles from './WordsList.module.scss'
import { Link } from 'react-router-dom'

const WordsList: React.FC = () => {
	const [totalItems, setTotalItems] = React.useState<number>(100)

	const fakeWords = [
		'Abadan',
		'Abadanlasıw',
		'Abadanlıq',
		'Abajur',
		'Abay',
		'Abay-sıyasat',
		'Abaylaw',
		'Abaylı',
		'Abaysız',
		'Abaysızda',
		'Abadan',
		'Abadanlasıw',
		'Abadanlıq',
		'Abajur',
		'Abay',
		'Abay-sıyasat',
		'Abaylaw',
		'Abaylı',
		'Abaysız',
		'Abaysızda',
		'Abadan',
		'Abadanlasıw',
		'Abadanlıq',
		'Abajur',
		'Abay',
		'Abay-sıyasat',
		'Abaylaw',
		'Abaylı',
		'Abaysız',
		'Abaysızda',
	]
	return (
		<div className={styles.root}>
			<div className={styles.title}>Sózler dizimi</div>
			<div className={styles.list}>
				<h2>Aa</h2>
				<div>
					{fakeWords.map(word => {
						return <Link to='/'>{word}</Link>
					})}
				</div>
			</div>
			<div className={styles.pagination}>
				<Pagination
					defaultCurrent={1}
					showSizeChanger={false}
					pageSize={30}
					total={totalItems}
				/>
			</div>
		</div>
	)
}
export { WordsList }
