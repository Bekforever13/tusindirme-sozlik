import { api } from '../../index.api'
import { IUsersDataResult, TUser } from './Users.types'

export const allUsers = api.injectEndpoints({
	endpoints: builder => ({
		getAllUsers: builder.query<IUsersDataResult, void>({
			query: () => ({
				url: '/admins',
			}),
			providesTags: ['admins'],
		}),
		createNewUser: builder.mutation<TUser, TUser>({
			query: body => ({
				url: '/admins',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['admins'],
		}),
		editUser: builder.mutation<any, TUser>({
			query: body => ({
				url: '/edit-admin',
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['admins'],
		}),
		deleteUser: builder.mutation<any, string>({
			query: id => ({
				url: `/admins/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['admins'],
		}),
	}),
})
