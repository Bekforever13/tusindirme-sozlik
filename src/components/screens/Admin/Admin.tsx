import React from 'react'
import { MdOutlineTranslate } from 'react-icons/md'
import { FiUsers, FiLogOut } from 'react-icons/fi'
import { Layout, Menu, theme } from 'antd'
import { AiOutlineHome } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import styles from './Admin.module.scss'
import logo from 'src/assets/images/header_logo.svg'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Search } from 'src/components/shared/search/Search'
const { Header, Content, Footer, Sider } = Layout

const items = [
	{ pathname: '/admin', icon: <AiOutlineHome />, label: 'Home' },
	{ pathname: '/admin/words', icon: <MdOutlineTranslate />, label: 'Words' },
	{ pathname: '/admin/category', icon: <BiCategory />, label: 'Category' },
	{ pathname: '/admin/admins', icon: <FiUsers />, label: 'Admins' },
	{ pathname: '/auth', icon: <FiLogOut />, label: 'Logout' },
].map(obj => ({
	key: obj.pathname,
	icon: obj.icon,
	label: obj.label,
}))

const Admin: React.FC = () => {
	const [collapsed, setCollapsed] = React.useState(false)
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const onCLickMenuItem = (e: any) => {
		if (e.key === '/auth') {
			localStorage.removeItem('token')
		}
		navigate(e.key)
	}
	const token = localStorage.getItem('token')

	React.useEffect(() => {
		if (token) {
			console.log('authorized')
		} else {
			navigate('/auth')
		}

	}, [token])

	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<Layout hasSider>
			<Sider
				collapsible
				onCollapse={value => setCollapsed(value)}
				collapsed={collapsed}
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0,
					top: 0,
					zIndex: 999,
					bottom: 0,
				}}
			>
				<div className={styles.aside_logo}>
					<img src={logo} />
				</div>
				<Menu
					theme='dark'
					mode='inline'
					items={items}
					selectedKeys={[pathname]}
					onSelect={e => onCLickMenuItem(e)}
				/>
			</Sider>
			<Layout
				className='site-layout'
				style={
					collapsed
						? { transition: 'all .3s ease-in-out', marginLeft: 60 }
						: { transition: 'all .3s ease-in-out', marginLeft: 200 }
				}
			>
				<Header style={{ padding: 0, background: colorBgContainer }}>
					<Search />
				</Header>
				<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
					<div
						style={{
							padding: 24,
							textAlign: 'center',
							background: colorBgContainer,
						}}
					>
						<Outlet />
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Avtorlıq huqıqı © 2022 Bookie audiokitaplar, "KARSOFT-IT-SOLUTIONS"
					JSHJ • Barlıq huqıqlar qorǵalǵan.
				</Footer>
			</Layout>
		</Layout>
	)
}
export { Admin }
