export type TUserWord = {
	title_latin: string
	title_kiril: string
	description_latin: string
	description_kiril: string
}

export interface IUserWordResult {
	data: TUserWord
}