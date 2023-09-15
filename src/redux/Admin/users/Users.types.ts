export type TUser = {
	id: string
	name: string
	phone: string
	role: string[]
	role_id?: string
}

export interface IUsersDataResult {
	data: TUser[]
}


export type TRole = {
	id: string
	name: string
}