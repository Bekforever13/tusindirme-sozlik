import { bindActionCreators } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from "react-redux"
import { actions as allWords } from "src/redux/allWords/allWords.slice"

const rootActions = {
	...allWords
}

export const useActions = () => {
	const dispatch = useDispatch()
	return React.useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}