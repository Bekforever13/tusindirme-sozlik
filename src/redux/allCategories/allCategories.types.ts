export type TCategory = {
	key?: string
	id: string
	title: [
		{
			kiril: string
			latin: string
		}
	]
}

export type TNewCategory = {
	type_id: string
	title: [
		{
			latin: string
			kiril: string
		}
	]
}

export interface IAllCategoriesDataResult {
	data: TCategory[]
}

// export interface IInitialState {
// 	words: TWord[]
// }

// export interface ITableData {
// 	key: string
// 	titleLatin: string
// 	titleKiril: string
// 	descLatin: string
// 	descKiril: string
// }
