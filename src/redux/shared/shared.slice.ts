import { TWord } from 'src/redux/allWords/Allwords.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ISharedType } from './shared.types'
import { TCategory } from '../allCategories/allCategories.types';

const initialState: ISharedType = {
	searchValue: '',
	wordModalShow: false,
	wordToEdit: null,
	categoryModalShow: false,
	categoryToEdit: null
}

const sharedSlice = createSlice({
	name: 'shared',
	initialState,
	reducers: {
		toggleModalWord(state, { payload }: PayloadAction<boolean>) {
			state.wordModalShow = payload
		},
		setWordToEdit(state, { payload }: PayloadAction<TWord | null>) {
			state.wordToEdit = payload
		},
		setCategoryToEdit(state, { payload }: PayloadAction<TCategory | null>) {
			state.categoryToEdit = payload
		},
		toggleModalCategory(state, { payload }: PayloadAction<boolean>) {
			state.categoryModalShow = payload
		},
		setSearchValue(state, { payload }: PayloadAction<string>) {
			state.searchValue = payload
		},
	},
})
export const { reducer, actions } = sharedSlice
