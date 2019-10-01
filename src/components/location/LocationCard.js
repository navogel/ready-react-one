import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firstLetterCase } from '../../modules/helpers';

class LocationCard extends Component {
	render() {
		return (
			<div className='card'>
				<div className='card-content'>
					<picture>{/* <img src={require('./5.png')} alt='Location' /> */}</picture>
					<h3>
						City: <span className='card-location'>{firstLetterCase(this.props.location.name)}</span>
					</h3>
					<p>Most popular breed: {this.props.location.breed}</p>
					<button type='button' onClick={() => this.props.deleteLocation(this.props.location.id)}>
						BURN IT DOWN
					</button>
					<Link to={`/locations/${this.props.location.id}`}>
						<button>Details</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default LocationCard;
