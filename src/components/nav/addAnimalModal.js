import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AnimalForm from '../animal/AnimalForm';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function FormDialog(props) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className=''>
			<Fab color='primary' onClick={handleClickOpen}>
				<AddIcon />
			</Fab>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<AnimalForm props={props} onClose={handleClose} />
			</Dialog>
		</div>
	);
}
