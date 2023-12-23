import { bindActionCreators } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { actions as shared } from 'src/redux/shared/shared.slice'
import { actions as auth } from 'src/redux/auth/Auth.slice'
import { actions as user } from 'src/redux/User/User.slice'
import { actions as allWords } from 'src/redux/Admin/allWords/AllWords.slice'

const rootActions = {
	...shared,
	...auth,
	...user,
	...allWords,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return React.useMemo(
		() => bindActionCreators(rootActions, dispatch),
		[dispatch]
	)
}
