import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import { firstLetterCase } from '../../modules/helpers';
// import "./LocationDetail.css";

class LocationDetail extends Component {
	state = {
		name: '',
		breed: '',
		image: '',
		loadingStatus: true,
		noLocation: true
	};

	handleDelete = () => {
		this.setState({ loadingStatus: true });
		LocationManager.delete(this.props.locationId).then(() =>
			this.props.history.push('/locations')
		);
	};

	componentDidMount() {
		console.log('LocationDetail: ComponentDidMount');
		LocationManager.get(this.props.locationId).then(location => {
			this.setState({
				name: location.name,
				breed: location.breed,
				image: location.image,
				noLocation: !location.name,
				loadingStatus: false
			});
		});
	}

	render() {
		if (this.state.loadingStatus) return <p> NOT READY</p>;
		else if (this.state.noLocation) return <p>Location go BYE-BYE</p>;
		else
			return (
				<div className='card'>
					<div className='card-content'>
						<picture>
							<img
								src={require(`../../images/locations/${this.state.image}`)}
								alt='My location'
							/>
						</picture>
						<h3>
							Name:{' '}
							<span style={{ color: 'darkslategrey' }}>
								{firstLetterCase(this.state.name)}
							</span>
						</h3>
						<p>Popular Breed: {this.state.breed}</p>
						<button
							type='button'
							disabled={this.state.loadingStatus}
							onClick={this.handleDelete}
						>
							Shut 'er Down
						</button>
					</div>
				</div>
			);
	}
}

export default LocationDetail;
