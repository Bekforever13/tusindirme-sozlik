import { TKirilLatin } from 'src/redux/User/User.types'

export type TUser = {
	id?: number
	name: string
	phone: string
	role?: string[]
	role_id?: number
	user_id?: number
}

export interface IUsersDataResult {
	data: TUser[]
}

export type TRole = {
	id: number
	name: string
}

export type TAdminHistory = {
	word: TKirilLatin
	status: string
	date: string
}

export interface THistories {
	id: number
	name: string
	histories: TAdminHistory[]
}

export interface THistoriesDataResponse {
	data: THistories[]
	meta: {
		current_page: number
		from: number
		last_page: number
		links: { url: string; label: string; active: boolean }[]
		path: string
		per_page: number
		to: number
		total: number
	}
	links: {
		first: string
		last: string
		prev: null
		next: null
	}
}
