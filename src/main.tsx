import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/styles/_reset.scss';
import './assets/styles/_colors.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/index.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </BrowserRouter>,
);
