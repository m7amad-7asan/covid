// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import {userSlice} from './Store/Store';

// Main Redux Store
const reducer = combineReducers({
  user: userSlice.reducer,
});

const middleware = [...getDefaultMiddleware()];
const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof reducer>;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
