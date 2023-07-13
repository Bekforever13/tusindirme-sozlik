import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './index.api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { reducer as allWords } from './allWords/allWords.slice'

const reducers = combineReducers({ allWords, [api.reducerPath]: api.reducer })

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
