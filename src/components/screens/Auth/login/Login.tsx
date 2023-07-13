import React from 'react'
import { Button, Form, Input } from 'antd'
import styles from './Login.module.scss'
import logo from 'src/assets/images/logo_about.svg'
import { ILogin } from 'src/redux/auth/Auth.types'
import { useLoginMutation } from 'src/redux/index.endpoints'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
	const [login, { isSuccess, data }] = useLoginMutation()
	const onFinish = async (values: ILogin) => {
		await login(values)
		await navigate('/admin', { replace: true })
		await localStorage.setItem('token', `Bearer ${data?.token}`)
	}
	const navigate = useNavigate()

	// localstorage => Bearer undefined <<=== need to fix it
	React.useEffect(() => {
		if (localStorage.getItem('token') === 'Bearer undefined') {
			localStorage.removeItem('token')
		}

		if (isSuccess && localStorage.getItem('token') !== 'Bearer undefined') {
			navigate('/admin', { replace: true })
		}
	}, [localStorage.getItem('token')])

	return (
		<div className={styles.root}>
			<img src={logo} alt='' />
			<Form
				name='basic'
				style={{ maxWidth: 800 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				autoComplete='off'
			>
				<Form.Item
					label='Phone'
					name='phone'
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
export { Login }
