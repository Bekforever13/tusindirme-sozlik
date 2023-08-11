import React from 'react'
import { Button, Form, Input, Spin } from 'antd'
import styles from './Login.module.scss'
import logo from 'src/assets/images/logo_about.svg'
import { ILogin } from 'src/redux/auth/Auth.types'
import { useCheckUserQuery, useLoginMutation } from 'src/redux/index.endpoints'
import { useNavigate } from 'react-router-dom'
import { useActions } from 'src/hooks/useActions'

const Login: React.FC = () => {
	const navigate = useNavigate()
	const { setToken, setCurrentUserRole } = useActions()
	const token = localStorage.getItem('token')

	const { data: checkUserData, isSuccess: checkUserIsSuccess } =
		useCheckUserQuery()
	const [login, { isSuccess, data: loginData }] = useLoginMutation()

	const onFinish = async (values: ILogin) => {
		await login(values)
	}

	React.useEffect(() => {
		if (token && checkUserIsSuccess) {
			const role = checkUserData?.data.role
			switch (role) {
				case 'admin':
					navigate('/dashboard/admin', { replace: true })
					break
				case 'copywriter':
					navigate('/dashboard/copywriter', { replace: true })
					break
				case 'tester':
					navigate('/dashboard/tester', { replace: true })
					break
				case 'user':
					navigate('/', { replace: true })
					break
			}
		}
	}, [checkUserIsSuccess])

	React.useEffect(() => {
		if (token) {
			setToken(token)
			checkUserIsSuccess && navigate('/dashboard/' + checkUserData?.data.role)
		}
	}, [])

	React.useEffect(() => {
		if (isSuccess && loginData) {
			setToken(loginData.token)
			setCurrentUserRole(loginData.role)
			navigate(`/dashboard/${loginData.role}`, { replace: true })
		}
	}, [isSuccess, loginData])

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
