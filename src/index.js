import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import myFirstReducer from './reducer';
import reportWebVitals from './reportWebVitals';
import mySaga from './sagas';
const root = ReactDOM.createRoot(document.getElementById('root'));
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    myFirstReducer: myFirstReducer
  },middleware: [sagaMiddleware]}, );
// applyMiddleware(sagaMiddleware)
sagaMiddleware.run(mySaga); 
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
