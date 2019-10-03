import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
// import './EmployeeForm.css';

class EmployeeForm extends Component {
	state = {
		employeeName: '',
		breed: '',
		image: '',
		loadingStatus: false
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	/*  Local method for validation, set loadingStatus, create animal object, invoke the AnimalManager post method, and redirect to the full animal list
	 */
	constructNewAnimal = evt => {
		evt.preventDefault();
		if (
			this.state.employeeName === '' ||
			this.state.breed === '' ||
			this.state.image === ''
		) {
			window.alert('Please input an animal name and breed and image');
		} else {
			this.setState({ loadingStatus: true });
			const employee = {
				name: this.state.employeeName,
				breed: this.state.breed,
				image: this.state.image
			};

			// Create the animal and redirect user to animal list
			EmployeeManager.post(employee).then(() =>
				this.props.history.push('/employees')
			);
		}
	};

	render() {
		return (
			<>
				<form>
					<fieldset>
						<div className='formgrid'>
							<input
								type='text'
								required
								onChange={this.handleFieldChange}
								id='employeeName'
								placeholder='Employee name'
							/>
							<label htmlFor='employeeName'>Name</label>
							<input
								type='text'
								required
								onChange={this.handleFieldChange}
								id='breed'
								placeholder='Breed'
							/>
							<label htmlFor='breed'>Breed</label>
							<input
								type='text'
								required
								onChange={this.handleFieldChange}
								id='image'
								placeholder='image'
							/>
							<label htmlFor='image'>Image</label>
						</div>
						<div className='alignRight'>
							<button
								type='button'
								disabled={this.state.loadingStatus}
								onClick={this.constructNewAnimal}
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

export default EmployeeForm;
