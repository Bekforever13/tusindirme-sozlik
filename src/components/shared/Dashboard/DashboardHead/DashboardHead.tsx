import { UiButton } from 'src/components/ui/button/UiButton'
import styles from './DashboardHead.module.scss'

type TPropType = {
	title: string
	buttonText: string
	handleClick: () => void
}

const DashboardHead: React.FC<TPropType> = props => {
	const { title, buttonText, handleClick } = props
	
	return (
		<div className={styles.root}>
			<h2>{title}</h2>
			<UiButton onClick={handleClick}>{buttonText}</UiButton>
		</div>
	)
}
export { DashboardHead }
