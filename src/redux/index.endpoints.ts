import { allAdmins } from './admins/Admins.api'
import { allCategoriesApi } from './allCategories/allCategories.api'
import { AllWordsApi } from './allWords/AllWords.api'
import { authApi } from './auth/Auth.api'
import { allTypesApi } from './types/_Types.api'

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

export const {
	useCreateNewAdminMutation,
	useDeleteAdminMutation,
	useGetAllAdminsQuery,
	useEditAdminMutation,
} = allAdmins

export const {
	useCreateNewTypeMutation,
	useDeleteTypeMutation,
	useEditTypeMutation,
	useGetAllTypesQuery,
} = allTypesApi
