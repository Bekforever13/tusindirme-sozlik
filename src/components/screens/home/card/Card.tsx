import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
import { BsArrowRight } from 'react-icons/bs'

const Card: React.FC = () => {
	return (
		<div className={styles.root}>
			<h3>Kóp izlenetuģın sózler</h3>
			<div className={styles.words}>
				<Link to='/'>Xızmetker</Link>
				<Link to='/'>Rezerv</Link>
				<Link to='/'>Jaǵday </Link>
				<Link to='/'>Qıyal </Link>
				<Link to='/'>Dizim</Link>
				<Link to='/'>Hújjet</Link>
			</div>
			<Link to='/' className={styles.linkToAll}>
				<span>Hámmesin kóriw</span>
				<BsArrowRight />
			</Link>
		</div>
	)
}

export { Card }
