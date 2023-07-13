import { Button, ButtonProps, ConfigProvider } from 'antd'

const UiButton: React.FC<ButtonProps> = _props => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#5B21B6',
				},
			}}
		>
			<Button {..._props} type='primary' />
		</ConfigProvider>
	)
}
export { UiButton }
