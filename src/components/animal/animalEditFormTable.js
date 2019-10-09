import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from '../../modules/EmployeeManager';

class AnimalEditFormTable extends Component {
	//set the initial state
	state = {
		animalName: '',
		breed: '',
		image: '',
		employeeId: '',
		employees: [],
		loadingStatus: true
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	updateExistingAnimal = evt => {
		evt.preventDefault();
		this.setState({ loadingStatus: true });
		const editedAnimal = {
			id: this.props.props.id,
			name: this.state.animalName,
			breed: this.state.breed,
			image: this.state.image,
			employeeId: parseInt(this.state.employeeId)
		};

		AnimalManager.update(editedAnimal).then(() => {
			this.props.props.props.getData();
			this.props.onClose();
		});
	};

	componentDidMount() {
		EmployeeManager.getAll().then(allEmployees => {
			AnimalManager.get(this.props.props.id).then(animal => {
				this.setState({
					animalName: animal.name,
					breed: animal.breed,
					image: animal.image,
					employeeId: animal.employeeId,
					loadingStatus: false,
					employees: allEmployees
				});
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
								id='animalName'
								value={this.state.animalName}
							/>
							<label htmlFor='animalName'>Animal name</label>

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
								onClick={this.updateExistingAnimal}
								className='btn btn-primary'
							>
								Submit
							</button>
						</div>
						<select
							className='form-control'
							id='employeeId'
							value={this.state.employeeId}
							onChange={this.handleFieldChange}
						>
							{this.state.employees.map(employee => (
								<option key={employee.id} value={employee.id}>
									{employee.name}
								</option>
							))}
						</select>
					</fieldset>
				</form>
			</>
		);
	}
}

export default AnimalEditFormTable;
