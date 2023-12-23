import { api } from '../../index.api'
import {
	IAllWordsDataResult,
	TAntonim,
	TGetWordParams,
	TSinonim,
	TWordFormData,
	TWordWithAntSin,
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
		getAdminWordInfo: builder.query<TWordWithAntSin, number>({
			query: id => {
				if (id === 0) {
					throw new Error('ID required')
				}
				return {
					url: `/words/${id}`,
				}
			},
			providesTags: ['words'],
		}),
		createSinonims: builder.mutation<unknown, TSinonim>({
			query: body => ({
				url: '/synonym',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['words'],
		}),
		createAntonims: builder.mutation<unknown, TAntonim>({
			query: body => ({
				url: '/antonym',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['words'],
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
