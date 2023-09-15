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

export type TUserWordCard = {
	id: number
	title_latin: string
	title_kiril: string
}

export type TUserCardPropType = {
	title: string
	words?: TUserWordCard[]
}

export interface IUserWordCardsResult {
	in_correct: TUserWordCard[]
	max: TUserWordCard[]
	random: TUserWordCard[]
}

export interface IUserSingleWordResult {
	data: TUserWord
}

export interface IUserAllWordsDataResult {
	data: TAllUserWords[]
	pagination: {
		count: number
		current_page: number
		per_page: number
		total: number
		total_pages: number
	}
}

export type TAllUserWord = {
	limit: number
	page: number
}
