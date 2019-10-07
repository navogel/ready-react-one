import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AnimalDrawer from './AnimalDrawer';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function ButtonAppBar(props) {
	const classes = useStyles();

	console.log('props from animal list', props);

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<AnimalDrawer taco={props} />
					<Typography variant='h6' className={classes.title}>
						{props.page}
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
