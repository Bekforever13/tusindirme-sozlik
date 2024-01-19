import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUserInitState, TUserWordCard } from './User.types'

const initialState: TUserInitState = {
	popularWordsData: [],
	isCorrectWordsData: [],
	randomWordsData: [],
	popularWordsLoading: false,
	isCorrectWordsLoading: false,
	randomWordsLoading: false,
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
		setPopularWordsLoading(state, { payload }: PayloadAction<boolean>) {
			state.popularWordsLoading = payload
		},
		setIsCorrectWordsLoading(state, { payload }: PayloadAction<boolean>) {
			state.isCorrectWordsLoading = payload
		},
		setRandomWordsLoading(state, { payload }: PayloadAction<boolean>) {
			state.randomWordsLoading = payload
		},
	},
})

export const { reducer, actions } = userSlice
