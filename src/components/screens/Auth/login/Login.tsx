import React from 'react'
import { Button, Form, Input, Spin } from 'antd'
import styles from './Login.module.scss'
import logo from 'src/assets/images/logo_about.svg'
import { ILogin } from 'src/redux/auth/Auth.types'
import { useLoginMutation } from 'src/redux/index.endpoints'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
	const navigate = useNavigate()
	const [login, { isSuccess, isLoading, data }] = useLoginMutation()

	const onFinish = async (values: ILogin) => {
		await login(values)
	}

	React.useEffect(() => {
		if (localStorage.getItem('token') === 'Bearer undefined') {
			localStorage.removeItem('token')
			navigate('/auth', { replace: true })
		}
		if (isSuccess) {
			navigate('/admin', { replace: true })
			localStorage.setItem('token', `Bearer ${data?.token}`)
		}
	}, [isSuccess])

	return (
		<Spin spinning={isLoading}>
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
		</Spin>
	)
}
export { Login }
