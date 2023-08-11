import React from 'react'
import styles from './Home.module.scss'
import { Search } from 'src/components/shared/search/Search'
import { Frame } from 'src/components/screens/home/frame/Frame'
import { About } from 'src/components/screens/home/about/About'
import { FloatButton } from 'antd'
import { Card } from 'src/components/shared/Landing/Card/Card'
import {
	useGetCardWordsQuery,
	useGetUserWordQuery,
} from 'src/redux/index.endpoints'
import { Skeleton } from 'src/components/shared/Landing/Skeleton/Skeleton'
import { useLocation } from 'react-router-dom'
import { Word } from './word/Word'

const Home: React.FC = () => {
	const { data, isSuccess, isLoading } = useGetCardWordsQuery()
	const { pathname } = useLocation()
	const id = pathname.slice(1)
	const { data: WordData } = useGetUserWordQuery(id)

	return (
		<div className={styles.root}>
			{+id !== 0 && <Word />}
			{!id && (
				<div className={styles.search}>
					<h1>Bir sózdi izleń, onı úyreniń</h1>
					<Search />
				</div>
			)}
			<div className={styles.cards}>
				{isLoading ? (
					<Skeleton />
				) : (
					isSuccess && <Card title='Kóp izlenetuģın sózler' words={data.max} />
				)}
				{isLoading ? (
					<Skeleton />
				) : (
					isSuccess && <Card title='Tosınarlı sózler' words={data.random} />
				)}
				{isLoading ? (
					<Skeleton />
				) : (
					isSuccess && (
						<Card title='Kóp qáte etiletuǵın sózler' words={data.in_correct} />
					)
				)}
			</div>
			<Frame />
			<About />
			<FloatButton.BackTop visibilityHeight={0} />
		</div>
	)
}

export { Home }
