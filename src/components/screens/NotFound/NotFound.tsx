import React from 'react'
import styles from './NotFound.module.scss'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
	const navigate = useNavigate()
	const handleClick = () => navigate('/', { replace: true })
	return (
		<div className={styles.root}>
			<h1>Whoops!</h1>
			<span>404. Page is not found</span>
			<button onClick={handleClick}>Back to home</button>
		</div>
	)
}

export { NotFound }
