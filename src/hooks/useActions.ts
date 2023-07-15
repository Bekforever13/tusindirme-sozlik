import { bindActionCreators } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { actions as shared } from 'src/redux/shared/shared.slice'

const rootActions = {
	...shared,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return React.useMemo(
		() => bindActionCreators(rootActions, dispatch),
		[dispatch]
	)
}
