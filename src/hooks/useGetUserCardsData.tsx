import { useState, useEffect } from 'react'
import { useGetCardWordsQuery } from 'src/redux/index.endpoints'
import { useActions } from './useActions'

const useGetUserCardsData = () => {
	const [status, setStatus] = useState('random')
	const { data, isSuccess, isFetching } = useGetCardWordsQuery(status)
	const {
		setRandomWordsData,
		setPopularWordsData,
		setIsCorrectWordsData,
		setPopularWordsLoading,
		setRandomWordsLoading,
		setIsCorrectWordsLoading,
	} = useActions()

	useEffect(() => {
		if (isFetching) {
			if (isSuccess && status === 'random') {
				setRandomWordsLoading(true)
				setStatus('is_correct')
			} else if (isSuccess && status === 'is_correct') {
				setIsCorrectWordsLoading(true)
				setStatus('popular')
			} else if (isSuccess && status === 'popular') {
				setPopularWordsLoading(true)
				setStatus('')
			}
		}
		if (data) {
			if (isSuccess && status === 'random') {
				setRandomWordsLoading(false)
				setRandomWordsData(data.data)
				setStatus('is_correct')
			} else if (isSuccess && status === 'is_correct') {
				setIsCorrectWordsLoading(false)
				setIsCorrectWordsData(data.data)
				setStatus('popular')
			} else if (isSuccess && status === 'popular') {
				setPopularWordsLoading(false)
				setPopularWordsData(data.data)
				setStatus('')
			}
		}
	}, [data, isFetching])
}

export { useGetUserCardsData }
