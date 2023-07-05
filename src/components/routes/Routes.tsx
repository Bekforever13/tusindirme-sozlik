import { Hero } from '../screens/hero/Hero'
import { WordsList } from '../shared/words list/WordsList'

export const routes = [
	{ path: '/', element: <Hero /> },
	{ path: '/wordslist', element: <WordsList /> },
]
