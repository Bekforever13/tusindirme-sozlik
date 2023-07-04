import React from 'react'
import styles from './Hero.module.scss'
import { Search } from '../search/Search'
import { Card } from '../card/Card'
import { Frame } from '../frame/Frame'
import { About } from '../about/About'

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
