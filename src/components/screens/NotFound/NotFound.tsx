import React from 'react'
import styles from './NotFound.module.scss'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
	const navigate = useNavigate()
	const navigateToHomePage = () => navigate('/', { replace: true })

	return (
		<div className={styles.root}>
			<h1>Whoops!</h1>
			<span>404. Page is not found</span>
			<button onClick={navigateToHomePage}>Back to home</button>
		</div>
	)
}

export { NotFound }
