import React, { Component } from 'react';

class LocationCard extends Component {
	render() {
		return (
			<div className='card'>
				<div className='card-content'>
					<picture>
						{/* <img src={require('./5.png')} alt='Location' /> */}
					</picture>
					<h3>
						City: <span className='card-location'>Nashville</span>
					</h3>
					<p>Address: Lame Lane</p>
				</div>
			</div>
		);
	}
}

export default LocationCard;
