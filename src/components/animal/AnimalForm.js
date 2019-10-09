import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css';
import EmployeeManager from '../../modules/EmployeeManager';

class AnimalForm extends Component {
	state = {
		animalName: '',
		breed: '',
		image: '',
		loadingStatus: false,
		employeeId: '',
		employees: []
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
			this.state.animalName === '' ||
			this.state.breed === '' ||
			this.state.image === '' ||
			this.state.employeeId === ''
		) {
			window.alert('Please input an animal name, breed, image, and employee');
		} else {
			this.setState({ loadingStatus: true });
			const animal = {
				name: this.state.animalName,
				breed: this.state.breed,
				image: this.state.image,
				employeeId: parseInt(this.state.employeeId)
			};

			// Create the animal and redirect user to animal list
			AnimalManager.post(animal).then(() => {
				console.log('addform props', this.props);
				this.props.props.getData();
				this.props.onClose();
				// this.props.props.history.push('/animals');
			});
		}
	};

	componentDidMount() {
		EmployeeManager.getAll().then(allEmployees => {
			this.setState({
				employees: allEmployees
			});
		});
	}

	render() {
		return (
			<>
				{/* <ButtonAppBar {...this.props} page='Onboard a new Animal' /> */}
				<form className='modalContainer'>
					<fieldset>
						<div className='formgrid'>
							<input
								type='text'
								required
								onChange={this.handleFieldChange}
								id='animalName'
								placeholder='Animal name'
							/>
							<label htmlFor='animalName'>Name</label>
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
							<select
								className='form-control'
								id='employeeId'
								value={this.state.employeeId}
								onChange={this.handleFieldChange}
							>
								<option>Employee</option>
								{this.state.employees.map(employee => (
									<option key={employee.id} value={employee.id}>
										{employee.name}
									</option>
								))}
							</select>
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

export default AnimalForm;
