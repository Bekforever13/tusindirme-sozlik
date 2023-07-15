import { ConfigProvider, Input, InputProps } from 'antd'
import React from 'react'

const UiInput: React.FC<InputProps> = _props => {
	return (
		<ConfigProvider>
			<Input {..._props} />
		</ConfigProvider>
	)
}

export { UiInput }
