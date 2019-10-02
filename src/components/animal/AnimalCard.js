import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firstLetterCase } from '../../modules/helpers';

class AnimalCard extends Component {
	render() {
		return (
			<div className='card'>
				<div className='card-content'>
					<picture>
						<img src={require(`../../images/animals/${this.props.animal.id}.jpg`)} alt='My Dog' />
					</picture>
					<h3>
						Name: <span className='card-petname'>{firstLetterCase(this.props.animal.name)}</span>
					</h3>
					<p>Breed: {this.props.animal.breed}</p>
					<button type='button' onClick={() => this.props.deleteAnimal(this.props.animal.id)}>
						Discharge
					</button>
					<Link to={`/animals/${this.props.animal.id}`}>
						<button>Details</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default AnimalCard;
