import { Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'

import styles from './Header.module.scss'

const HeaderLang: React.FC = () => {
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
	}

	return (
		<div className={styles.lang}>
			<Dropdown menu={{ items }} trigger={['click']} placement='top'>
				<a onClick={e => handleClickLang(e)}>
					<Space>QQ</Space>
				</a>
			</Dropdown>
		</div>
	)
}
export { HeaderLang }
