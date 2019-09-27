import React, { Component } from 'react';
import './Kennel.css';
import AnimalCard from './animal/AnimalCard';
import EmployeeCard from './employee/EmployeeCard';
import OwnerCard from './owner/OwnerCard';
import LocationCard from './location/LocationCard';

class Kennel extends Component {
	render() {
		return (
			<div>
				<div>
					<h2>
						Student Kennels
						<br />
						<small>
							Loving care when you're not there {this.props.taco.first}
						</small>
					</h2>

					<address>
						Visit Us at the Nashville North Location
						<br />
						500 Puppy Way
					</address>
				</div>
				<AnimalCard />
				<EmployeeCard />
				<OwnerCard />
				<LocationCard />
			</div>
		);
	}
}

export default Kennel;
