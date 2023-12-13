import { TUser } from '../Admin/users/Users.types'
import { TCategory } from '../Admin/allCategories/allCategories.types'
import { TWord } from '../Admin/allWords/Allwords.types'

export interface ISharedType {
	searchValue: string
	wordModalShow: boolean
	wordToEdit: TWord | null
	categoryModalShow: boolean
	categoryToEdit: TCategory | null
	typesModalShow: boolean
	usersModalShow: boolean
	userToEdit: TUser | null
}
