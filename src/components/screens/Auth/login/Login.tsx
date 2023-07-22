import React from 'react'
import { Button, Form, Input, Spin } from 'antd'
import styles from './Login.module.scss'
import logo from 'src/assets/images/logo_about.svg'
import { ILogin } from 'src/redux/auth/Auth.types'
import { useCheckUserQuery, useLoginMutation } from 'src/redux/index.endpoints'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
	const navigate = useNavigate()
	const {
		data: checkUserData,
		isSuccess: checkUserIsSuccess,
		isError: checkUserIsError,
	} = useCheckUserQuery()
	const [login, { isSuccess, isLoading, data: loginData }] = useLoginMutation()

	const onFinish = async (values: ILogin) => {
		await login(values)
	}

	React.useEffect(() => {
		if (isSuccess) {
			navigate('/admin', { replace: true })
			localStorage.setItem('token', `Bearer ${loginData?.token}`)
		}
	}, [isSuccess])

	React.useEffect(() => {
		if (checkUserData?.data.role === 'admin') {
			navigate('/admin', { replace: true })
		} else if (checkUserData?.data.role === 'tester') {
			navigate('/tester', { replace: true })
		} else if (checkUserData?.data.role === 'copywriter') {
			navigate('/copywriter', { replace: true })
		}
		if (!localStorage.getItem('token')) {
			navigate('/auth', { replace: true })
		}
	}, [localStorage.getItem('token'), checkUserIsSuccess, checkUserIsError])

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
