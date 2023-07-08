import { Home } from '../screens/home/Home'
import { WordsList } from '../shared/words list/WordsList'

export const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/wordslist', element: <WordsList /> },
]
