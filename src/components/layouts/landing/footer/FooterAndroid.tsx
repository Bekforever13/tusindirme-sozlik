import { Link } from 'react-router-dom'
import android from 'src/assets/images/android.svg'

const FooterAndroid: React.FC = () => {
	return (
		<Link to='https://play.google.com/' target='_blank'>
			<img src={android} />
		</Link>
	)
}
export { FooterAndroid }
