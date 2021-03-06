import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
import Route from './components/routes';
import { history } from "./custom";
import { store, persistor } from './stores';
import * as serviceWorker from './serviceWorker';

Sentry.init({ dsn: 'https://2c6dcda20e1a4119b6afc80e071be3bc@sentry.io/1822829' });
ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} />
    <Router forceRefresh history={history}>
      <Route />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
