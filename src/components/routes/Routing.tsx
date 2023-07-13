import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from 'src/components/screens/NotFound/NotFound'
import { Layout } from 'src/components/layouts/Layout'
import { routes } from './Routes'
import { Login } from '../screens/Auth/login/Login'
import { Admin } from '../screens/Admin/Admin'
import { AdminRoutes } from './AdminRoutes'

const Routing: React.FC = () => {
	return (
		<Routes>
			<Route path='/auth' element={<Login />} />
			<Route path='/' element={<Layout />}>
				{routes.map((route, i) => (
					<Route key={i} path={route.path} element={route.element} />
				))}
			</Route>
			<Route path='/admin' element={<Admin />}>
				{AdminRoutes.map((route, i) => (
					<Route key={i} path={route.path} element={route.element} />
				))}
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export { Routing }
