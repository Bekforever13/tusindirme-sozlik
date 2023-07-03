import { BsArrowRight } from 'react-icons/bs'
import styles from './Frame.module.scss'

const Frame: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>Sózlerdi úyreniwdiń eń nátiyjeli usılı</div>
			<div className={styles.frameWrapper}>
				<div className={styles.frame}>
					<iframe
						width='750'
						height='444'
						src='https://www.youtube.com/embed/uSwe-5dPrV8'
						title='RTK Query или альтернативный Redux по работе с API'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
				</div>
				<div className={styles.card}>
					<h3>Eń nátıyjelı usılı</h3>
					<p>
						Sózlerdi úyreniwdiń eń nátiyjeli usılı - tek ǵana biz benen!<br />
						<span>Tusindirmesozlik.uz</span> - Qaraqalpaq tilindegi sózlerdi durıs jazıw hám
						onıń mánisin mısallar járdeminde sizge shaǵıp beriwge járdem beredi!
						Video arqalı veb sayttıń islew funkciyası hám kreativligin tolıǵıraq
						túsinip alasız.
					</p>
					<div className={styles.link}>
						Tolıq <BsArrowRight />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Frame
