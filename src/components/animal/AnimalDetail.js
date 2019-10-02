import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { firstLetterCase } from '../../modules/helpers';
class AnimalDetail extends Component {
	state = {
		name: '',
		breed: '',
		loadingStatus: true,
		noAnimal: true
	};

	handleDelete = () => {
		//invoke the delete function in AnimalManger and re-direct to the animal list.
		this.setState({ loadingStatus: true });
		AnimalManager.delete(this.props.animalId).then(() => this.props.history.push('/animals'));
	};

	componentDidMount() {
		console.log('AnimalDetail: ComponentDidMount');
		//get(id) from AnimalManager and hang on to that data; put it into state
		AnimalManager.get(this.props.animalId).then(animal => {
			this.setState({
				name: animal.name,
				breed: animal.breed,
				image: animal.image,
				loadingStatus: false,
				noAnimal: !animal.name
			});
		});
	}

	render() {
		if (this.state.loadingStatus) return <p> NOT READY</p>;
		else if (this.state.noAnimal) return <p>UR ANIMAL IS BYE-BYE</p>;
		else
			return (
				<div className='card'>
					``
					<div className='card-content'>
						<h3>
							Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(this.state.name)}</span>
						</h3>
						<picture>
							<img className='detailsImage' src={require(`../../images/animals/${this.state.image}`)} alt='My Dog' />
						</picture>

						<p>Breed: {this.state.breed}</p>
						<button type='button' disabled={this.state.loadingStatus} onClick={this.handleDelete}>
							Discharge
						</button>
					</div>
				</div>
			);
	}
}

export default AnimalDetail;
