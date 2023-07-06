import ReactDOM from 'react-dom/client'
import { App } from './App'
import 'src/assets/styles/base/_reset.scss'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		{/* <Provider store={store}> */}
		<App />
		{/* </Provider> */}
	</BrowserRouter>
)
