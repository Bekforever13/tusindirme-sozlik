export interface ILogin {
	phone: string
	password: string
}
export interface IResultType {
	token: string
	role: string
}

export interface IInitialState {
	token: string
	currentUserRole: string
}

// v2
export type TDataUser = {
	data: {
		id: number
		name: string
		phone: string
		role: string
	}
}
