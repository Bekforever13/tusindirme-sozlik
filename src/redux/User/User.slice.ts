import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUserInitState, TUserWordCard } from './User.types'

const initialState: TUserInitState = {
	popularWordsData: [],
	isCorrectWordsData: [],
	randomWordsData: [],
}

const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		setPopularWordsData(state, { payload }: PayloadAction<TUserWordCard[]>) {
			state.popularWordsData = payload
		},
		setIsCorrectWordsData(state, { payload }: PayloadAction<TUserWordCard[]>) {
			state.isCorrectWordsData = payload
		},
		setRandomWordsData(state, { payload }: PayloadAction<TUserWordCard[]>) {
			state.randomWordsData = payload
		},
	},
})

export const { reducer, actions } = userSlice
