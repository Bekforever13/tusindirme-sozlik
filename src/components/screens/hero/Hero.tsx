import React from 'react'
import styles from './Hero.module.scss'
import { Search } from '../../shared/search/Search'
import { Card } from '../../shared/card/Card'
import { Frame } from '../../shared/frame/Frame'
import { About } from '../../shared/about/About'

const Hero: React.FC = () => {
	return (
		<div className={styles.root}>
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
