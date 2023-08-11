import { api } from '../../index.api'
import { IWordCardsRes } from './cards.types'

export const cardsApi = api.injectEndpoints({
	endpoints: builder => ({
		getCardWords: builder.query<IWordCardsRes, void>({
			query: () => ({
				url: '/words-parameter',
			}),
		}),
	}),
})
