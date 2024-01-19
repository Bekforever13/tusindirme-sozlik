import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AllWordsInitState, LabelValue, TWordAS } from './Allwords.types'

const initialState: AllWordsInitState = {
	currentWord: {
		id: 0,
		audio: '',
		category_id: 0,
		category: { latin: '', kiril: '' },
		title: { latin: '', kiril: '' },
		description: { latin: '', kiril: '' },
		antonym: [],
		synonym: [],
		is_correct: false,
		quantity: '',
	},
	selectedAntonims: [],
	selectedSinonims: [],
	AntSinModal: false,
	wordSearch: '',
	AudioModal: false,
	AudioProgress: 0,
}

const AllWordsSlice = createSlice({
	name: 'AllWordsSlice',
	initialState,
	reducers: {
		setCurrentWord(state, { payload }: PayloadAction<TWordAS>) {
			state.currentWord = payload
		},
		setSelectedAntonims(state, { payload }: PayloadAction<LabelValue[]>) {
			state.selectedAntonims = payload
		},
		setSelectedSinonims(state, { payload }: PayloadAction<LabelValue[]>) {
			state.selectedSinonims = payload
		},
		setAntSinModal(state, { payload }: PayloadAction<boolean>) {
			state.AntSinModal = payload
		},
		setWordSearch(state, { payload }: PayloadAction<string>) {
			state.wordSearch = payload
		},
		setAudioModal(state, { payload }: PayloadAction<boolean>) {
			state.AudioModal = payload
		},
		setAudioProgress(state, { payload }: PayloadAction<number>) {
			state.AudioProgress = payload
		},
	},
})

export const { reducer, actions } = AllWordsSlice
