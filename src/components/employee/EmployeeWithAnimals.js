import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import AnimalCard from '../animal/AnimalCard';

class EmployeeWithAnimals extends Component {
	state = {
		employee: {},
		animals: []
	};

	//refresh state with current fetch from DB
	getData = () => {
		EmployeeManager.getWithAnimals(this.props.match.params.employeeId).then(
			APIResult => {
				this.setState({
					employee: APIResult,
					animals: APIResult.animals
				});
			}
		);
	};

	componentDidMount() {
		//got here now make call to get employee with animal
		EmployeeManager.getWithAnimals(this.props.match.params.employeeId).then(
			APIResult => {
				this.setState({
					employee: APIResult,
					animals: APIResult.animals
				});
			}
		);
	}

	render() {
		return (
			<div className='card'>
				<p>Employee: {this.state.employee.name}</p>
				{this.state.animals.map(animal => (
					<AnimalCard
						key={animal.id}
						animal={animal}
						{...this.props}
						//pass refresh to the card for delete function
						getData={this.getData}
					/>
				))}
			</div>
		);
	}
}

export default EmployeeWithAnimals;
