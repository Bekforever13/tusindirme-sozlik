import { TCategory } from "../allCategories/allCategories.types"

export type TAdmin = {
	key: number
	id: number
	name: string
	phone: string
	role: string
}

export interface IAdminsDataResult {
	data: TCategory[]
}