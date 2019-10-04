import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firstLetterCase } from '../../modules/helpers';
import AnimalManager from '../../modules/AnimalManager';
import Button from '@material-ui/core/Button';

class AnimalCard extends Component {
	handleDelete = id => {
		AnimalManager.delete(id).then(() => this.props.getData());
	};
	render() {
		return (
			<div className='card'>
				<div className='card-content'>
					<picture>
						<img
							src={require(`../../images/animals/${this.props.animal.image}`)}
							alt='My Dog'
						/>
					</picture>
					<h3>
						Name:{' '}
						<span className='card-petname'>
							{firstLetterCase(this.props.animal.name)}
						</span>
					</h3>
					<p>Breed: {this.props.animal.breed}</p>
					<Button
						variant='contained'
						color='primary'
						onClick={() => this.handleDelete(this.props.animal.id)}
					>
						Discharge
					</Button>
					<Button
						variant='contained'
						color='primary'
						onClick={() => {
							this.props.history.push(`/animals/${this.props.animal.id}/edit`);
						}}
					>
						Edit
					</Button>
					<Link to={`/animals/${this.props.animal.id}`}>
						<Button className='button' variant='contained' color='primary'>
							Info
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}

export default AnimalCard;
