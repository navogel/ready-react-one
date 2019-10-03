import React, { Component } from 'react';

class EmployeeCard extends Component {
	render() {
		return (
			<div className='card'>
				<div className='card-content'>
					<picture>
						<img
							src={require(`../../images/employees/${this.props.employee.image}`)}
							alt='My Employee'
						/>
					</picture>
					<h3>
						Employee:{' '}
						<span className='card-employeename'>
							{this.props.employee.name}
						</span>
					</h3>
					<p>favorite breed: {this.props.employee.breed}</p>
					<button
						type='button'
						onClick={() => this.props.deleteEmployee(this.props.employee.id)}
					>
						FIRE THEM
					</button>
					<button
						type='button'
						onClick={() => {
							this.props.history.push(
								`/employees/${this.props.employee.id}/edit`
							);
						}}
					>
						Edit
					</button>
					<button
						type='button'
						onClick={() => {
							this.props.history.push(
								`/employees/${this.props.employee.id}/details`
							);
						}}
					>
						Details
					</button>
				</div>
			</div>
		);
	}
}

export default EmployeeCard;
