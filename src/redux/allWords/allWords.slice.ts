import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from './Allwords.types'

const initialState: IInitialState = {
	words: [],
}

const allWordsSlice = createSlice({
	name: 'allWords',
	initialState,
	reducers: {
		getAllWords(state, { payload }) {
			state.words = payload
		},
	},
})

export const { reducer, actions } = allWordsSlice
