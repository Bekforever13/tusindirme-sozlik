import { TKirilLatin } from 'src/redux/User/User.types'

export type TWord = {
	id: number
	category: TKirilLatin
	description: TKirilLatin
	title: TKirilLatin
	is_correct: boolean
	category_id?: number
	quantity: string
}

export interface IAllWordsDataResult {
	data: TWord[]
	total: number
	per_page: number
	current_page: number
}

export interface TWordFormData {
	id?: number
	title: TKirilLatin
	description: TKirilLatin
	category_id: number
}

export type TGetWordParams = {
	search?: string
	page?: number
	limit?: number
}
