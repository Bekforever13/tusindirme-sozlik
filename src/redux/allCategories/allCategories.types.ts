export type TCategory = {
	key?: string
	id: string
	type_id: number
	title_latin: string
	title_kiril: string
}

export interface IAllCategoriesDataResult {
	data: TCategory[]
}
