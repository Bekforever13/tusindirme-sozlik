import { allCategoriesApi } from './allCategories/allCategories.api'
import { AllWordsApi } from './allWords/AllWords.api'
import { authApi } from './auth/Auth.api'

export const { useGetUserQuery, useLoginMutation } = authApi

export const {
	useGetAllWordsQuery,
	useCreateNewWordMutation,
	useEditWordMutation,
	useDeleteWordMutation,
} = AllWordsApi

export const {
	useGetAllCategoriesQuery,
	useCreateNewCategoryMutation,
	useDeleteCategoryMutation,
	useEditCategoryMutation,
} = allCategoriesApi
