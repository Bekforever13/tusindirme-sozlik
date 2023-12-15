export type TKirilLatin = {
	latin: string
	kiril: string
}

type TWord = {
	id: number
	title_latin: string
	title_kiril: string
}

export type TUserWord = {
	title_latin: string
	title_kiril: string
	description_latin: string
	description_kiril: string
	rank: [
		{
			Antonim?: TWord[]
			Sinonim?: TWord[]
		},
		{
			Sinonim?: TWord[]
		}
	]
}
export type TAllUserWords = {
	id: number
	title_latin: string
	title_kiril: string
	description_latin: string
	description_kiril: string
	correct: number
	created_at: string
	deleted_at: string | null
	quantity: number
	status: string
	status_id: number
	tester_id: number | null
	updated_at: string
	user_id: number
}

// v2 types

export type TAllUserWord = {
	limit?: number
	page?: number
	search?: string
}

export type TUserWordCard = {
	id: number
	category: TKirilLatin
	title: TKirilLatin
	description: TKirilLatin
	is_correct: boolean
	quantity: number
}

export interface ICardsDataResponse {
	data: TUserWordCard[]
	total: number
	per_page: number
	current_page: number
}

export type TUserInitState = {
	popularWordsData: TUserWordCard[]
	isCorrectWordsData: TUserWordCard[]
	randomWordsData: TUserWordCard[]
}

export type TUserCardPropType = {
	title: string
	words?: TUserWordCard[]
}

export interface IUserSingleWordResult {
	data: TUserWordCard
}

export interface IUserAllWordsDataResult {
	data: TUserWordCard[]
	total: number
	per_page: number
	current_page: number
}
