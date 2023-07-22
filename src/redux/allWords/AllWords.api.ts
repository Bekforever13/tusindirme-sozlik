import { api } from '../index.api'
import { IAllWordsDataResult, TWord } from './Allwords.types'

export const AllWordsApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllWords: builder.query<IAllWordsDataResult, string>({
			query: (search) => ({
				url: `/words?search=${search}`,
			}),
			providesTags: ['words'],
		}),
		createNewWord: builder.mutation<TWord, TWord>({
			query: body => ({
				url: '/words',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['words'],
		}),
		editWord: builder.mutation<any, TWord>({
			query: body => ({
				url: `/words/${body.id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['words'],
		}),
		deleteWord: builder.mutation<any, string>({
			query: id => ({
				url: `/words/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['words'],
		}),
	}),
})
