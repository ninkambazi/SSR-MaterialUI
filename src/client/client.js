// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
	userAgent: navigator.userAgent
}); 

const store = createStore(
	reducers, 
	window.INITIAL_STATE, 
	applyMiddleware(thunk)
);

ReactDOM.hydrate(
	<MuiThemeProvider muiTheme={muiTheme}>
		<Provider store={store}>
			<BrowserRouter>
				<div>{renderRoutes(Routes)}</div>
			</BrowserRouter>
		</Provider>
	</MuiThemeProvider>,
	document.querySelector('#root')
);