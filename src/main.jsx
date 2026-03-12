import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './components/ThemeProvider.jsx';
import { Provider } from 'react-redux'
import store from './store.js';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store} >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
)
