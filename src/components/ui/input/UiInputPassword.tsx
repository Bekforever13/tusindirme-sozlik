import { Input, InputProps } from 'antd'
import React from 'react'

const UiInputPassword: React.FC<InputProps> = _props => {
	return <Input.Password {..._props} />
}

export { UiInputPassword }
