import React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function SimpleMenu(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	//console.log('menu props from animal list', props);

	return (
		<div>
			<Fab
				color='primary'
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}
			>
				<AddIcon />
			</Fab>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem
					onClick={() => {
						props.history.push('/animals/new');
					}}
				>
					Add new animal
				</MenuItem>
				<MenuItem
					onClick={() => {
						props.history.push('/owners/new');
					}}
				>
					Add new owner
				</MenuItem>
				<MenuItem
					onClick={() => {
						props.history.push('/employees/new');
					}}
				>
					Add new employee
				</MenuItem>
				<MenuItem
					onClick={() => {
						props.history.push('/locations/new');
					}}
				>
					Add new location
				</MenuItem>
			</Menu>
		</div>
	);
}
