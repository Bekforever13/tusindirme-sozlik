import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from 'src/components/screens/NotFound/NotFound'
import { Layout } from 'src/components/layouts/landing/Layout'
import { routes } from './Routes'
import { Admin } from 'src/components/layouts/dashboard/Dashboard'
import { DashboardRoutes } from './DashboardRoutes'
import { Login } from 'src/components/screens/Auth/Login'

const Routing: React.FC = () => {
	return (
		<Routes>
			<Route path='/auth' element={<Login />} />

			<Route path='/' element={<Layout />}>
				{routes.map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Route>

			<Route path='/' element={<Admin />}>
				{DashboardRoutes.map(route => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Route>

			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export { Routing }
