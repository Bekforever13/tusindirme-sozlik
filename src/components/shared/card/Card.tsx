import styles from './Card.module.scss'
import { BsArrowRight } from 'react-icons/bs'

const Card: React.FC = () => {
	return (
		<div className={styles.root}>
			<h3>Kóp izlenetuģın sózler</h3>
			<div className={styles.words}>
				<h4>Xızmetker</h4>
				<h4>Rezerv</h4>
				<h4>Jaǵday </h4>
				<h4>Qıyal </h4>
				<h4>Dizim</h4>
				<h4>Hújjet</h4>
			</div>
			<div className={styles.linkToAll}>
				<span>Hámmesin kóriw</span>
				<BsArrowRight />
			</div>
		</div>
	)
}
export default Card
