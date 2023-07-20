import { Button, ButtonProps } from 'antd'

const UiRedButton: React.FC<ButtonProps> = _props => {
	return <Button {..._props} danger type='primary' />
}
export { UiRedButton }
