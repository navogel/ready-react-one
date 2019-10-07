import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	list: {
		width: 250
	},
	fullList: {
		width: 'auto'
	}
});

export default function TemporaryDrawer(props) {
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false
	});

	const toggleDrawer = (side, open) => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const sideList = side => (
		<div
			className={classes.list}
			role='presentation'
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				<Link className='nav-link' to='/'>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={'Home'} />
					</ListItem>
				</Link>
				<Link className='nav-link' to='/animals'>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={'Animals'} />
					</ListItem>
				</Link>
				<Link className='nav-link' to='/locations'>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={'Locations'} />
					</ListItem>
				</Link>
				<Link className='nav-link' to='/owners'>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={'Owners'} />
					</ListItem>
				</Link>
				<Link className='nav-link' to='/employees'>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={'Employees'} />
					</ListItem>
				</Link>
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	console.log('props from nav bar', props);

	return (
		<div>
			<IconButton
				edge='start'
				className={classes.menuButton}
				color='inherit'
				aria-label='menu'
				onClick={toggleDrawer('left', true)}
			>
				<MenuIcon />
			</IconButton>

			<Drawer open={state.left} onClose={toggleDrawer('left', false)}>
				{sideList('left')}
			</Drawer>
		</div>
	);
}
