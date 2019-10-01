import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';
// import LocationDetail from './location/LocationDetail';

import './Kennel.css';

class Kennel extends Component {
	render() {
		return (
			<>
				<NavBar />
				<ApplicationViews />
				{/* <LocationDetail /> */}
			</>
		);
	}
}

export default Kennel;
