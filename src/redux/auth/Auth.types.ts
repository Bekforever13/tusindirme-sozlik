export interface ILogin {
	phone: string
	password: string
	remember?: boolean
}
export type TDataUser = {
	id: number
	name: string
	phone: string
	updated_at: string
	created_at: string
	deleted_at: string | null
}
export interface IResultType  {
	token: string
	user: TDataUser
}