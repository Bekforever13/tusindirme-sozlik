import { api } from '../index.api'
import { IAllWordsDataResult, TNewWord, TWord } from './Allwords.types'

export const AllWordsApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllWords: builder.query<IAllWordsDataResult, void>({
			query: () => ({
				url: '/words',
			}),
			providesTags: ['words'],
		}),
		createNewWord: builder.mutation<TNewWord, TNewWord>({
			query: body => ({
				url: '/words',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['words'],
		}),
		editWord: builder.mutation<any, TWord>({
			query: body => ({
				url: `/words/update/${body.id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['words'],
		}),
		deleteWord: builder.mutation<any, string>({
			query: id => ({
				url: `/words/delete/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['words'],
		}),
	}),
})
