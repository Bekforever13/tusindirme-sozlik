import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'src/redux'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useSelectors = () => {
	const { allWords, shared } = useAppSelector(s => s)
	return { ...allWords, ...shared }
}
