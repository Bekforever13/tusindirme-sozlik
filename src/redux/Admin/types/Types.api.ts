import { api } from '../../index.api'
import { ITypeDataResult, TType } from './Types.types'

export const allTypesApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllTypes: builder.query<ITypeDataResult, void>({
			query: () => ({
				url: '/types',
			}),
			providesTags: ['types'],
		}),
		createNewType: builder.mutation<TType, TType>({
			query: body => ({
				url: '/types',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['types'],
		}),
		editType: builder.mutation<any, TType>({
			query: body => ({
				url: `/types/${body.id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['types'],
		}),
		deleteType: builder.mutation<any, string>({
			query: id => ({
				url: `/types/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['types'],
		}),
	}),
})
