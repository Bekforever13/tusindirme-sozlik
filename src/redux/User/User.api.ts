import { api } from '../index.api'
import {
	IUserAllWordsDataResult,
	IUserSingleWordResult,
	IUserWordCardsResult,
	TAllUserWord,
} from './User.types'

export const UserApi = api.injectEndpoints({
	endpoints: builder => ({
		getCardWords: builder.query<IUserWordCardsResult, void>({
			query: () => ({
				url: '/words-parameter',
			}),
		}),
		getUserWord: builder.query<IUserSingleWordResult, any>({
			query: id => ({
				url: `/all-words/${id}`,
			}),
		}),
		getAllUserWords: builder.query<IUserAllWordsDataResult, TAllUserWord>({
			query: body => ({
				url: `/all-words?limit=${body.limit}&page=${body.page}`,
			}),
		}),
	}),
})
