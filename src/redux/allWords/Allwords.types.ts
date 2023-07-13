export type TWord = {
	key?: string
	id: string
	title: [
		{
			kiril: string
			latin: string
		}
	]
	description: [
		{
			kiril: string
			latin: string
		}
	]
	status_id?: string
	correct?: string
	category_id?: number[]
}

export type TNewWord = {
	title: [
		{
			latin: string
			kiril: string
		}
	]
	description: [
		{
			latin: string
			kiril: string
		}
	]
	correct: string
	category_id: number[]
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
