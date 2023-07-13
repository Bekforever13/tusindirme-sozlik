import React from 'react'
import styles from './Home.module.scss'
import { Search } from 'src/components/shared/search/Search'
import { Card } from 'src/components/screens/home/card/Card'
import { Frame } from 'src/components/screens/home/frame/Frame'
import { About } from 'src/components/screens/home/about/About'
// import { Word } from './word/Word'
import { FloatButton } from 'antd'

const Home: React.FC = () => {
	return (
		<div className={styles.root}>
			{/* <Word /> */}
			<div className={styles.search}>
				<h1>Bir sózdi izleń, onı úyreniń</h1>
				<Search />
			</div>
			<div className={styles.cards}>
				<Card />
				<Card />
				<Card />
			</div>
			<Frame />
			<About />
			<FloatButton.BackTop visibilityHeight={0} />
		</div>
	)
}

export { Home }
