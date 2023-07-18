import { TCategory } from '../allCategories/allCategories.types'
import { TWord } from '../allWords/Allwords.types'
import { TType } from '../types/_Types.types'

export interface ISharedType {
	searchValue: string
	wordModalShow: boolean
	categoryModalShow: boolean
	typesModalShow: boolean
	wordToEdit: TWord | null
	categoryToEdit: TCategory | null
	typeToEdit: TType | null
}
