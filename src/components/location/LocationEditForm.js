import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
// import "./LocationForm.css"

class LocationEditForm extends Component {
	//set the initial state
	state = {
		locationName: '',
		breed: '',
		image: '',
		loadingStatus: true
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	updateExistingLocation = evt => {
		evt.preventDefault();
		this.setState({ loadingStatus: true });
		const editedLocation = {
			id: this.props.match.params.locationId,
			name: this.state.locationName,
			breed: this.state.breed,
			image: this.state.image
		};

		LocationManager.update(editedLocation).then(() =>
			this.props.history.push('/locations')
		);
	};

	componentDidMount() {
		LocationManager.get(this.props.match.params.locationId).then(location => {
			this.setState({
				locationName: location.name,
				breed: location.breed,
				image: location.image,
				loadingStatus: false
			});
		});
	}

	render() {
		return (
			<>
				<form>
					<fieldset>
						<div className='formgrid'>
							<input
								type='text'
								required
								className='form-control'
								onChange={this.handleFieldChange}
								id='locationName'
								value={this.state.locationName}
							/>
							<label htmlFor='locationName'>Location name</label>

							<input
								type='text'
								required
								className='form-control'
								onChange={this.handleFieldChange}
								id='breed'
								value={this.state.breed}
							/>
							<label htmlFor='breed'>Breed</label>

							<input
								type='text'
								required
								className='form-control'
								onChange={this.handleFieldChange}
								id='image'
								value={this.state.image}
							/>
							<label htmlFor='image'>Image</label>
						</div>
						<div className='alignRight'>
							<button
								type='button'
								disabled={this.state.loadingStatus}
								onClick={this.updateExistingLocation}
								className='btn btn-primary'
							>
								Submit
							</button>
						</div>
					</fieldset>
				</form>
			</>
		);
	}
}

export default LocationEditForm;
