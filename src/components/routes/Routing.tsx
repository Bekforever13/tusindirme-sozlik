import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HOME } from './Routes'
import { Hero } from '../shared/hero/Hero'
import { NotFound } from '../screens/NotFound/NotFound'
import Layout from '../layouts/Layout'
import { IRoutes } from './Routes.type'


const routes: IRoutes[] = [
	{
		path: HOME,
		element: <Hero />,
	},
]

const Routing: React.FC = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				{routes.map((route, i) => (
					<Route key={i} path={route.path} element={route.element} />
				))}
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default Routing
