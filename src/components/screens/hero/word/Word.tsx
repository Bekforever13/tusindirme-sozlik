import { BsShareFill } from 'react-icons/bs'
import styles from './Word.module.scss'

const Word: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.word}>
				<h2>Abadan</h2>
				<span>
					<BsShareFill />
				</span>
			</div>
			<div className={styles.type}>Kelbetlik</div>
			<div className={styles.desc}>
				Jetkilikli, mol, kóp, qurǵın, barshılıq. Zamanımız endi boldı abadan.
				Kámbaǵalǵa náwbet jete basladı (A. Muwsaev). Biz paxtakesh xalıqlar azat
				shıǵısta, Jasaymız abadan shadlı turmısta (I. Yusupov). Ádira qalǵır
				tuwǵan jer. Bolmaǵan soń abadan (Jiyen jıraw).
			</div>
			<div className={styles.common}>
				<div className={styles.common_type}>
					<span>Sinonim</span>
					<ul>
						<li>Abadan</li>
						<li>Abadanshılıq</li>
						<li>Abay</li>
					</ul>
				</div>
				<div className={styles.common_type}>
					<span>Antonim </span>
					<ul>
						<li>Abay-sıyasat</li>
						<li>Abaylı</li>
						<li>Abaysız</li>
					</ul>
				</div>
				<div className={styles.common_type}>
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
