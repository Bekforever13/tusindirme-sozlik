import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AllWordsInitState, LabelValue, TWord } from './Allwords.types'

const initialState: AllWordsInitState = {
	currentWord: {
		category: { latin: '', kiril: '' },
		description: { latin: '', kiril: '' },
		id: 0,
		is_correct: false,
		quantity: '',
		title: { latin: '', kiril: '' },
	},
	selectedAntonims: [],
	selectedSinonims: [],
}

const AllWordsSlice = createSlice({
	name: 'AllWordsSlice',
	initialState,
	reducers: {
		setCurrentWord(state, { payload }: PayloadAction<TWord>) {
			state.currentWord = payload
		},
		setSelectedAntonims(state, { payload }: PayloadAction<LabelValue[]>) {
			state.selectedAntonims = payload
		},
		setSelectedSinonims(state, { payload }: PayloadAction<LabelValue[]>) {
			state.selectedSinonims = payload
		},
	},
})

export const { reducer, actions } = AllWordsSlice
