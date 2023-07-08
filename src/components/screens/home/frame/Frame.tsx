import { BsArrowRight } from 'react-icons/bs'
import styles from './Frame.module.scss'
import { Link } from 'react-router-dom'

const Frame: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>Sózlerdi úyreniwdiń eń nátiyjeli usılı</div>
			<div className={styles.frameWrapper}>
				<div className={styles.frame}>
					<iframe
						src='https://www.youtube.com/embed/uSwe-5dPrV8'
						title='RTK Query или альтернативный Redux по работе с API'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					/>
				</div>
				<div className={styles.card}>
					<h3>Eń nátıyjelı usılı</h3>
					<p>
						Sózlerdi úyreniwdiń eń nátiyjeli usılı - tek ǵana biz benen!
						<br />
						<Link to='https://tusindirmesozlik.uz'>
							Tusindirmesozlik.uz
						</Link>{' '}
						- Qaraqalpaq tilindegi sózlerdi durıs jazıw hám onıń mánisin
						mısallar járdeminde sizge shaǵıp beriwge járdem beredi! Video arqalı
						veb sayttıń islew funkciyası hám kreativligin tolıǵıraq túsinip
						alasız.
					</p>
					<Link to='/' className={styles.link}>
						Tolıq <BsArrowRight />
					</Link>
				</div>
			</div>
		</div>
	)
}
export { Frame }
