import { useState, useEffect } from 'react'
import { useGetCardWordsQuery } from 'src/redux/index.endpoints'
import { useActions } from './useActions'

const useGetUserCardsData = () => {
	const [status, setStatus] = useState('random')
	const { data, isSuccess, isLoading } = useGetCardWordsQuery(status)
	const { setRandomWordsData, setPopularWordsData, setIsCorrectWordsData } =
		useActions()

	useEffect(() => {
		if (data) {
			if (isSuccess && status === 'random') {
				setRandomWordsData(data.data)
				setStatus('is_correct')
			} else if (isSuccess && status === 'is_correct') {
				setIsCorrectWordsData(data.data)
				setStatus('popular')
			} else if (isSuccess && status === 'popular') {
				setPopularWordsData(data.data)
				setStatus('')
			}
		}
	}, [data])
	return {
		isLoading,
	}
}

export { useGetUserCardsData }
