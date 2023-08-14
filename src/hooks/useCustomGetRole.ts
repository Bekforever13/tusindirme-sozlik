import { useLocation } from 'react-router-dom'

export const useCustomGetRole = (num: number) => {
	const { pathname } = useLocation()
	return pathname.slice(num)
}
