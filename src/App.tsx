import React from 'react'
import { Routing } from './components/routes/Routing'
import s from 'src/assets/styles/App.module.scss'
import { ScrollToTop } from './utils/ScrollToTop'

const App: React.FC = () => (
	<div className={s.app}>
		<ScrollToTop>
			<Routing />
		</ScrollToTop>
	</div>
)

export { App }
