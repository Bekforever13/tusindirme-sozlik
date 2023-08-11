import { api } from '../../index.api'
import { IUserWordResult } from './UserWord.type'

export const userWordApi = api.injectEndpoints({
	endpoints: builder => ({
		getUserWord: builder.query<IUserWordResult, any>({
			query: id => ({
				url: `/all-words/${id}`,
			}),
		}),
	}),
})
