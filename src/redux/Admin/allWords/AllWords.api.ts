import { api } from '../../index.api'
import {
	IAllWordsDataResult,
	TGetWordParams,
	TWordFormData,
} from './Allwords.types'

export const AllWordsApi = api.injectEndpoints({
	endpoints: builder => ({
		getAdminAllWords: builder.query<IAllWordsDataResult, TGetWordParams>({
			query: body => ({
				url: '/words',
				params: body,
			}),
			providesTags: ['words'],
		}),
		createNewWord: builder.mutation<unknown, TWordFormData>({
			query: body => ({
				url: '/words',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['words'],
		}),
		editWord: builder.mutation<any, TWordFormData>({
			query: body => ({
				url: `/words/${body.id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['words'],
		}),
		deleteWord: builder.mutation<any, number>({
			query: id => ({
				url: `/words/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['words'],
		}),
	}),
})
