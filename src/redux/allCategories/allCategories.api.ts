import { api } from '../index.api'
import { IAllCategoriesDataResult, TCategory, TNewCategory } from './allCategories.types'

export const allCategoriesApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllCategories: builder.query<IAllCategoriesDataResult, void>({
			query: () => ({
				url: '/categories',
			}),
			providesTags: ['categories'],
		}),
		createNewCategory: builder.mutation<TNewCategory, TNewCategory>({
			query: body => ({
				url: '/categories',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['categories'],
		}),
		editCategory: builder.mutation<any, TCategory>({
			query: body => ({
				url: `/categories/update/${body.id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['categories'],
		}),
		deleteCategory: builder.mutation<any, string>({
			query: id => ({
				url: `/categories/delete/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['categories'],
		}),
	}),
})
