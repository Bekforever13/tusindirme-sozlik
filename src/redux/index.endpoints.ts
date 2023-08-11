import { allUsers } from './users/Users.api'
import { allCategoriesApi } from './allCategories/allCategories.api'
import { AllWordsApi } from './allWords/AllWords.api'
import { authApi } from './auth/Auth.api'
import { allTypesApi } from './types/Types.api'
import { cardsApi } from './landing/cards/cards.api'
import { userWordApi } from './landing/UserWord/UserWord.api'

export const { useCheckUserQuery, useLoginMutation } = authApi

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

export const {
	useCreateNewUserMutation,
	useGetAllUsersQuery,
	useEditUserMutation,
	useDeleteUserMutation,
	useGetAllRolesQuery,
} = allUsers

export const {
	useCreateNewTypeMutation,
	useDeleteTypeMutation,
	useEditTypeMutation,
	useGetAllTypesQuery,
} = allTypesApi

export const { useGetCardWordsQuery } = cardsApi

export const { useGetUserWordQuery } = userWordApi
