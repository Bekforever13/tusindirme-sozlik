import { TKirilLatin } from 'src/redux/User/User.types'

export type TWord = {
	category: TKirilLatin
	description: TKirilLatin
	id: number
	is_correct: boolean
	quantity: string
	title: TKirilLatin
	category_id?: number
}

export type LabelValue = {
	label: string
	value: number
}

export type TWordAS = {
	antonym: TWord[]
	category: TKirilLatin
	category_id?: number
	description: TKirilLatin
	id: number
	is_correct: boolean
	quantity: string
	synonym: TWord[]
	title: TKirilLatin
	audio?: string
}

export type AllWordsInitState = {
	currentWord: TWordAS
	selectedAntonims: LabelValue[]
	selectedSinonims: LabelValue[]
	AntSinModal: boolean
	wordSearch: string
	AudioModal: boolean
	AudioProgress: number
}

export type TAntonim = {
	word_id: number
	antonym_id: number[]
}
export type TSinonim = {
	word_id: number
	synonym_id: number[]
}

export type TWordWithAntSin = {
	data: TWordAS
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
