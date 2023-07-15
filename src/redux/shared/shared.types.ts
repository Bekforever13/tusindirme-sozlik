import { TCategory } from '../allCategories/allCategories.types'
import { TWord } from '../allWords/Allwords.types'

export interface ISharedType {
	searchValue: string
	wordModalShow: boolean
	categoryModalShow: boolean
	wordToEdit: TWord | null
	categoryToEdit: TCategory | null
}
