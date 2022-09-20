import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter  } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Footer from './Footer';

const rootElem = document.getElementById('root');

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <HashRouter >
      <Provider store={store}>
        <App />
        <Footer />
      </Provider>
    </HashRouter >
  );
}
