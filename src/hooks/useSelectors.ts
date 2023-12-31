import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'src/redux'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useSelectors = () => {
	const { shared, auth, user, allWords } = useAppSelector(s => s)
	return { ...shared, ...auth, ...user, ...allWords }
}
