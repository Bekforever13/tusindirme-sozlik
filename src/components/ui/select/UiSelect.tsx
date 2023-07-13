import { ConfigProvider, Select, SelectProps } from 'antd'
import React from 'react'

const UiSelect: React.FC<SelectProps> = _props => {
	return (
		<ConfigProvider>
			<Select {..._props} />
		</ConfigProvider>
	)
}

export { UiSelect }
