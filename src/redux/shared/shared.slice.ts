import { TWord } from 'src/redux/Admin/allWords/Allwords.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ISharedType } from './shared.types'
import { TCategory } from 'src/redux/Admin/allCategories/allCategories.types'
import { TType } from '../Admin/types/Types.types'
import { TUser } from '../Admin/users/Users.types'

const initialState: ISharedType = {
	searchValue: '',
	wordModalShow: false,
	wordToEdit: null,
	categoryModalShow: false,
	categoryToEdit: null,
	typesModalShow: false,
	typeToEdit: null,
	usersModalShow: false,
	userToEdit: null,
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
		toggleModalType(state, { payload }: PayloadAction<boolean>) {
			state.typesModalShow = payload
		},
		setTypeToEdit(state, { payload }: PayloadAction<TType | null>) {
			state.typeToEdit = payload
		},
		toggleModalUser(state, { payload }: PayloadAction<boolean>) {
			state.usersModalShow = payload
		},
		setUserToEdit(state, { payload }: PayloadAction<TUser | null>) {
			state.userToEdit = payload
		},
	},
})

export const { reducer, actions } = sharedSlice
