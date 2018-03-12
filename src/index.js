import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer.js';
import createStore from './helpers/createStore';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

process.env.NODE_ENV = 'production';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
	const store = createStore();

	global.navigator = {
		userAgent: req.headers['user-agent']
	};

	//console.log(navigator.userAgent);

	const muiTheme = getMuiTheme({
		userAgent: req.headers['user-agent']
	});

	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
		return route.loadData ? route.loadData(store) : null;
	});

	Promise.all(promises).then(() => {
		res.send(renderer(req, store, muiTheme));
	});
});

var PORT = process.env.PORT || 3000
process.env.NODE_ENV = 'production'
app.listen(PORT, () => {
	console.log('Production Express server running at localhost:' + PORT);
});