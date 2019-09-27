import React, { Component } from 'react';

class EmployeeCard extends Component {
	render() {
		return (
			<div className='card'>
				<div className='card-content'>
					<picture>
						<img src={require('./5.png')} alt='Employee' />
					</picture>
					<h3>
						Employee: <span className='card-employeename'>Steve</span>
					</h3>
					<p>Hair Style: Lame</p>
				</div>
			</div>
		);
	}
}

export default EmployeeCard;
