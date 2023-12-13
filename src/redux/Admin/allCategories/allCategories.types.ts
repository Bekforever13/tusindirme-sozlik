import { TKirilLatin } from "src/redux/User/User.types"

export type TCategory = {
	id: string
	title: TKirilLatin
}

export interface IAllCategoriesDataResult {
	data: TCategory[]
}
