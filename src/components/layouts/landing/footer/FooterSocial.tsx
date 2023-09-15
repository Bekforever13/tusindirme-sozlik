import { RiTelegramLine } from 'react-icons/ri'
import { LiaFacebook } from 'react-icons/lia'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const FooterSocial: React.FC = () => {
	return (
		<div className={styles.social}>
			<Link aria-label='Facebook' to='https://facebook.com' target='_blank'>
				<LiaFacebook />
			</Link>
			<Link
				aria-label='Instagram'
				to='https://instagram.com/karsoftuz'
				target='_blank'
			>
				<AiOutlineInstagram />
			</Link>
			<Link
				aria-label='Youtube'
				to='https://www.youtube.com/@bookieqaraqalpaq/featured'
				target='_blank'
			>
				<AiOutlineYoutube />
			</Link>
			<Link
				aria-label='Telegramm'
				to='https://t.me/karsoft_bot'
				target='_blank'
			>
				<RiTelegramLine />
			</Link>
		</div>
	)
}
export { FooterSocial }
