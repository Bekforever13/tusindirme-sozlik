import React from 'react'
import styles from './Hero.module.scss'
import { Search } from 'src/components/screens/hero/search/Search'
import { Card } from 'src/components/screens/hero/card/Card'
import { Frame } from 'src/components/screens/hero//frame/Frame'
import { About } from './about/About'
import { Word } from './word/Word'

const Hero: React.FC = () => {
	return (
		<div className={styles.root}>
			{/* <Word /> */}
			<Search />
			<div className={styles.cards}>
				<Card />
				<Card />
				<Card />
			</div>
			<Frame />
			<About />
		</div>
	)
}

export { Hero }
