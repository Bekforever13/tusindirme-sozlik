import { TUser } from '../users/Users.types'
import { TCategory } from '../allCategories/allCategories.types'
import { TWord } from '../allWords/Allwords.types'
import { TType } from '../types/Types.types'

export interface ISharedType {
	searchValue: string
	wordModalShow: boolean
	wordToEdit: TWord | null
	categoryModalShow: boolean
	categoryToEdit: TCategory | null
	typesModalShow: boolean
	typeToEdit: TType | null
	usersModalShow: boolean
	userToEdit: TUser | null
}
