import { Home } from 'src/components/screens/home/Home'
import { WordsList } from 'src/components/shared/Landing/words list/WordsList'

export const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/:id', element: <Home /> },
	{ path: '/wordslist', element: <WordsList /> },
]
