import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import reducers from './reducers'

import App from './App';
import './index.css'

const theme = createTheme()

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
       
    </Provider>);

