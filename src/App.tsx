import React from 'react'
import { Routing } from './components/routes/Routing'
import s from 'src/assets/styles/App.module.scss'

const App: React.FC = () => (
	<div className={s.app}>
		<Routing />
	</div>
)

export { App }
