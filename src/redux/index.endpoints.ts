import { allUsers } from './users/Users.api'
import { allCategoriesApi } from './allCategories/allCategories.api'
import { AllWordsApi } from './allWords/AllWords.api'
import { authApi } from './auth/Auth.api'
import { allTypesApi } from './types/_Types.api'

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
