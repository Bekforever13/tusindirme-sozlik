import { Link } from 'react-router-dom'
import android from 'src/assets/images/android.svg'

const FooterAndroid: React.FC = () => {
	return (
		<Link to='https://play.google.com/' target='_blank'>
			<img width={118} height={28} src={android} alt='android' />
		</Link>
	)
}
export { FooterAndroid }
