import React from 'react'
import { Button, Form, Input } from 'antd'
import styles from './Login.module.scss'
import logo from 'src/assets/images/logo_about.svg'
import { ILogin } from 'src/redux/auth/Auth.types'
import { useLoginMutation } from 'src/redux/index.endpoints'
import { useNavigate } from 'react-router-dom'
import { useActions } from 'src/hooks/useActions'
import { MaskedInput } from 'antd-mask-input'

const Login: React.FC = () => {
	const navigate = useNavigate()
	const { setToken } = useActions()
	const token = localStorage.getItem('token')
	const [login, { isSuccess, data }] = useLoginMutation()

	const onFinish = async (values: ILogin) => {
		await login({ ...values, phone: values.phone.replace(/\D/g, '') })
	}

	React.useEffect(() => {
		if (token) {
			setToken(token)
			navigate('/admin')
		}
	}, [])

	React.useEffect(() => {
		if (isSuccess && data) {
			setToken(data.token)
			navigate(`/admin`, { replace: true })
		}
	}, [isSuccess, data])

	return (
		<div className={styles.root}>
			<img src={logo} alt='logo' />
			<Form
				name='basic'
				initialValues={{ remember: true }}
				onFinish={onFinish}
				autoComplete='off'
				layout='vertical'
			>
				<Form.Item
					label='Телефон'
					name='phone'
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<MaskedInput mask={'+{998}00 000 00 00'} />
				</Form.Item>
				<Form.Item
					label='Пароль'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>
				<Button style={{ width: '100%' }} type='primary' htmlType='submit'>
					Войти
				</Button>
			</Form>
		</div>
	)
}
export { Login }
