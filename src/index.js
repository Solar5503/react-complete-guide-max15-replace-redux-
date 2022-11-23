import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  combineReducers,
  createStore,
} from 'redux';

import App from './App';
import productReducer from './store/reducers/products';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rootReducer = combineReducers({
  shop: productReducer,
});

const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);