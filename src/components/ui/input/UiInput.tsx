import { Input, InputProps } from 'antd'
import React from 'react'

const UiInput: React.FC<InputProps> = _props => {
	return <Input {..._props} />
}

export { UiInput }
