import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialState } from './Auth.types'

const initialState: IInitialState = {
	token: '',
	currentUserRole: ''
}

const AuthSlice = createSlice({
	name: 'shared',
	initialState,
	reducers: {
		setToken(state, { payload }: PayloadAction<string>) {
			localStorage.setItem('token', `${payload}`)
			state.token = payload
		},
		setCurrentUserRole(state, {payload}: PayloadAction<string>){
			state.currentUserRole = payload
		},
		removeToken(state) {
			state.token = ''
		},
	},
})
export const { reducer, actions } = AuthSlice
