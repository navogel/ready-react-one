import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Kennel from './components/Kennel';
import theme from './theme';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Router>
			<CssBaseline />
			<Kennel />
		</Router>
	</ThemeProvider>,
	document.getElementById('root')
);
