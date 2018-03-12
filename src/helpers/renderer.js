import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default (req, store, muiTheme) => {
	const content = renderToString(
		<MuiThemeProvider muiTheme={muiTheme}>
			<Provider store={store}>
				<StaticRouter location={req.path} context={{}}>
					<div>{renderRoutes(Routes)}</div>
				</StaticRouter>
			</Provider>
		</MuiThemeProvider>
	); 

	return `
		<html>
			<head>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
			</head>
			<body>
				<div id="root">${content}</div>
				<script>
					window.INITIAL_STATE = ${serialize(store.getState())}
				</script>
				<script src="bundle.js"></script> 
			</body>
		</html>
	`;
};