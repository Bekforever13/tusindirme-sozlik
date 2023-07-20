export type TCategory = {
	key?: string
	id: string
	type_id: string
	title_latin: string
	title_kiril: string
}

export interface IAllCategoriesDataResult {
	data: TCategory[]
}
