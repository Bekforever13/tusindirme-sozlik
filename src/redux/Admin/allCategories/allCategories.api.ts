import { api } from '../../index.api'
import {
	IAllCategoriesDataResult,
	TCategory,
	TCategoryFomData,
} from './allCategories.types'

export const allCategoriesApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllCategories: builder.query<IAllCategoriesDataResult, void>({
			query: () => ({
				url: '/categories',
			}),
			providesTags: ['categories'],
		}),
		createNewCategory: builder.mutation<TCategory, TCategoryFomData>({
			query: body => ({
				url: '/categories',
				method: 'POST',
				body: { title: { latin: body.title_latin, kiril: body.title_kiril } },
			}),
			invalidatesTags: ['categories'],
		}),
		editCategory: builder.mutation<any, TCategory>({
			query: body => ({
				url: `/categories/${body.id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['categories'],
		}),
		deleteCategory: builder.mutation<any, string>({
			query: id => ({
				url: `/categories/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['categories'],
		}),
	}),
})
