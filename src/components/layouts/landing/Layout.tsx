import React from 'react'
import { Header } from 'src/components/layouts/landing/header/Header'
import { Footer } from 'src/components/layouts/landing/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export { Layout }
