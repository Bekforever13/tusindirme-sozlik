import { TKirilLatin } from "src/redux/User/User.types"

export type TCategory = {
	id: string
	title: TKirilLatin
}

export type TCategoryFomData = {
	title_latin: string
	title_kiril: string
}

export interface IAllCategoriesDataResult {
	data: TCategory[]
}
