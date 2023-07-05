import React from 'react'
import logo from 'src/assets/images/header_logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import { Turn as Hamburger } from 'hamburger-react'
import { Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'

const Header: React.FC = () => {
	const [isOpen, setOpen] = React.useState(false)
	const navigate = useNavigate()

	const items: MenuProps['items'] = [
		{
			label: 'QQ',
			key: '0',
		},
		{
			label: 'RU',
			key: '1',
		},
	]

	const handleClickLang = (e: any) => {
		e.preventDefault()
		console.log(e)
	}

	return (
		<div className={styles.root}>
			<Link to='/' className={styles.logo}>
				<img src={logo} alt='' />
				<span>Túsindirme sózlik</span>
			</Link>
			<div className={styles.links}>
				<Link to={'/wordslist'}>Sózler dizimi</Link>
				<a
					href='#about'
					onClick={() => {
						return navigate('/', { replace: true })
					}}
				>
					Baģdarlama haqqında
				</a>
			</div>
			<div className={styles.lang}>
				<Dropdown menu={{ items }} trigger={['click']}>
					<a onClick={e => handleClickLang(e)}>
						<Space>QQ</Space>
					</a>
				</Dropdown>
			</div>
			<div className={styles.hamburger}>
				<Hamburger
					size={27}
					toggled={isOpen}
					toggle={setOpen}
					direction='left'
				/>
			</div>
			{/* hamburger menu */}
			<div className={isOpen ? styles.hLinks : styles.hide}>
				<Link onClick={() => setOpen(false)} to={'/wordslist'}>
					Sózler dizimi
				</Link>
				<a
					href='#about'
					onClick={() => {
						setOpen(false)
						navigate('/', { replace: true })
					}}
				>
					Baģdarlama haqqında
				</a>
				<div className={styles.hLang}>QQ</div>
			</div>
		</div>
	)
}

export { Header }
