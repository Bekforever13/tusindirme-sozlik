import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
import { BsArrowRight } from 'react-icons/bs'
import { TCardPropType } from 'src/redux/landing/cards/cards.types'

const Card: React.FC<TCardPropType> = props => {
	const { title, words } = props

	const scroll = () => window.scrollTo(0, 0)

	return (
		<div className={styles.root}>
			<h3>{title}</h3>
			<div className={styles.words}>
				{words.map(item => {
					return (
						<Link onClick={scroll} to={`/${item.id}`}>
							{item.title_latin}
						</Link>
					)
				})}
			</div>
			<Link to='/' className={styles.linkToAll}>
				<span>Hámmesin kóriw</span>
				<BsArrowRight />
			</Link>
		</div>
	)
}

export { Card }
