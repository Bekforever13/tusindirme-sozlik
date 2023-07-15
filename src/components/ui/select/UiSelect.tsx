import { ConfigProvider, Select, SelectProps } from 'antd'
import React from 'react'

const UiSelect: React.FC<SelectProps> = _props => {
	return (
		<ConfigProvider>
			<Select {..._props} style={{ width: '100%' }} />
		</ConfigProvider>
	)
}

export { UiSelect }
