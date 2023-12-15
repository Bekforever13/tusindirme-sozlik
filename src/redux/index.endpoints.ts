import { allUsers } from './Admin/users/Users.api'
import { allCategoriesApi } from './Admin/allCategories/allCategories.api'
import { AllWordsApi } from './Admin/allWords/AllWords.api'
import { authApi } from './auth/Auth.api'
import { UserApi } from './User/User.api'

export const { useCheckUserQuery, useLoginMutation } = authApi

export const {
	useGetAdminAllWordsQuery,
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
} = allUsers

export const {
	useGetAllUserWordsQuery,
	useGetCardWordsQuery,
	useGetUserWordQuery,
} = UserApi
