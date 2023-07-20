export type TWord = {
	key?: string
	id: string
	title_latin: string
	title_kiril: string
	description_latin: string
	description_kiril: string
	status: 'rejected' | 'confirmed' | 'testing'
	correct?: boolean
	category_id?: string[]
}

export interface IAllWordsDataResult {
	data: TWord[]
}
