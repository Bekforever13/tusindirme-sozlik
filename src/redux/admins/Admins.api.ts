import { api } from '../index.api'
import { IAdminsDataResult, TAdmin } from './Admins.types'

export const allAdmins = api.injectEndpoints({
	endpoints: builder => ({
		getAllAdmins: builder.query<IAdminsDataResult, void>({
			query: () => ({
				url: '/users',
			}),
			providesTags: ['admins'],
		}),
		createNewAdmin: builder.mutation<TAdmin, TAdmin>({
			query: body => ({
				url: '/users/create-user',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['admins'],
		}),
		editAdmin: builder.mutation<any, TAdmin>({
			query: body => ({
				url: `/users/update/${body.id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['admins'],
		}),
		deleteAdmin: builder.mutation<any, string>({
			query: id => ({
				url: `/users/delete/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['admins'],
		}),
	}),
})
