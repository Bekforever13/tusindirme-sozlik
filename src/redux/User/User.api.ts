import { api } from '../index.api'
import {
	IUserAllWordsDataResult,
	IUserSingleWordResult,
	ICardsDataResponse,
	TAllUserWord,
} from './User.types'

export const UserApi = api.injectEndpoints({
	endpoints: builder => ({
		getCardWords: builder.query<ICardsDataResponse, string>({
			query: status => ({
				url: `/all-words${status ? `?status=${status}` : ''}`,
			}),
		}),
		getUserWord: builder.query<IUserSingleWordResult, string>({
			query: id => ({
				url: `/all-words/${id}`,
			}),
		}),
		getAllUserWords: builder.query<IUserAllWordsDataResult, TAllUserWord>({
			query: body => ({
				url: '/all-words',
				params: body,
			}),
		}),
	}),
})
