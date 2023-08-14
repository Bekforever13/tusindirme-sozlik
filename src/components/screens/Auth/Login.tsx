import React from 'react'
import { Button, Form, Input } from 'antd'
import styles from './Login.module.scss'
import logo from 'src/assets/images/logo_about.svg'
import { ILogin } from 'src/redux/auth/Auth.types'
import { useLoginMutation } from 'src/redux/index.endpoints'
import { useNavigate } from 'react-router-dom'
import { useActions } from 'src/hooks/useActions'

const Login: React.FC = () => {
	const navigate = useNavigate()
	const { setToken, setCurrentUserRole } = useActions()
	const token = localStorage.getItem('token')
	const [login, { isSuccess, data }] = useLoginMutation()

	const onFinish = async (values: ILogin) => {
		await login(values)
	}

	React.useEffect(() => {
		if (token) {
			setToken(token)
			navigate('/dashboard/admin')
		}
	}, [])

	React.useEffect(() => {
		if (isSuccess && data) {
			setToken(data.token)
			setCurrentUserRole(data.role)
			navigate(`/dashboard/${data.role}`, { replace: true })
		}
	}, [isSuccess, data])

	return (
		<div className={styles.root}>
			<img src={logo} />
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
