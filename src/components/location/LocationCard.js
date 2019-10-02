import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firstLetterCase } from '../../modules/helpers';

class LocationCard extends Component {
	render() {
		return (
			<div className='card'>
				<div className='card-content'>
					<picture>
						<img
							src={require(`../../images/locations/${this.props.local.image}`)}
							alt='My location'
						/>
					</picture>
					<h3>
						City:{' '}
						<span className='card-location'>
							{firstLetterCase(this.props.local.name)}
						</span>
					</h3>
					<p>Most popular breed: {this.props.local.breed}</p>
					<button
						type='button'
						onClick={() => this.props.deleteLocation(this.props.local.id)}
					>
						BURN IT DOWN
					</button>
					<Link to={`/locations/${this.props.local.id}`}>
						<button>Details</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default LocationCard;
