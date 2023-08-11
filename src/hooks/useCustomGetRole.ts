import { useLocation } from 'react-router-dom'

export const useCustomGetRole = () => {
	const { pathname } = useLocation()
	return pathname.slice(11)
}
