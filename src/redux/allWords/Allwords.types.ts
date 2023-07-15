export type TWord = {
	key?: string
	id: string
	title_latin: string
	title_kiril: string
	description_latin: string
	description_kiril: string
	status_id?: string | number
	categories_id?: number[]
	correct?: boolean
}

export interface IAllWordsDataResult {
	data: TWord[]
}

export interface IInitialState {
	words: TWord[]
}

export interface ITableData {
	key: string
	titleLatin: string
	titleKiril: string
	descLatin: string
	descKiril: string
}
