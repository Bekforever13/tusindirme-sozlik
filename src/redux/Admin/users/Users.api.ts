import { api } from '../../index.api'
import { IUsersDataResult, TRole, TUser } from './Users.types'

export const allUsers = api.injectEndpoints({
	endpoints: builder => ({
		getAllUsers: builder.query<IUsersDataResult, void>({
			query: () => ({
				url: '/users/all-users',
			}),
			providesTags: ['admins'],
		}),
		getAllRoles: builder.query<TRole[], void>({
			query: () => ({
				url: '/roles',
			}),
			providesTags: ['admins'],
		}),
		createNewUser: builder.mutation<TUser, TUser>({
			query: body => ({
				url: '/users/create-user',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['admins'],
		}),
		editUser: builder.mutation<any, TUser>({
			query: body => ({
				url: `/users/update/${body.id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['admins'],
		}),
		deleteUser: builder.mutation<any, string>({
			query: id => ({
				url: `/users/delete/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['admins'],
		}),
	}),
})
