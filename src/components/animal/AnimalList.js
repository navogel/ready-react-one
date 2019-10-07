import React, { Component } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';
import './animal.css';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';

// import MouseOverPopoverAnimal from '../animal/popover';
import ButtonAppBar from '../nav/AnimalBar';
import SimpleMenu from '../nav/AddMenu';

class AnimalList extends Component {
	//define what this component needs to render
	state = {
		animals: [],
		cardView: true
	};

	getData = () => {
		AnimalManager.getAll().then(newAnimals => {
			this.setState({
				animals: newAnimals
			});
		});
	};

	componentDidMount() {
		console.log('ANIMAL LIST: ComponentDidMount');
		//getAll from AnimalManager and hang on to that data; put it in state
		AnimalManager.getAll().then(animals => {
			this.setState({
				animals: animals
			});
		});
	}

	render() {
		console.log('ANIMAL LIST: Render');

		return (
			<>
				<ButtonAppBar {...this.props} page='Animals' />
				<section className='section-content'>
					{/* <div>
						<MouseOverPopoverAnimal />
					</div> */}
					<div>
						<SimpleMenu {...this.props} />
					</div>
				</section>
				<div className='container-cards'>
					{this.state.animals.map(animal => (
						<AnimalCard
							key={animal.id}
							animal={animal}
							getData={this.getData}
							{...this.props}
							cardView={this.state.cardView}
						/>
					))}
				</div>
			</>
		);
	}
}

export default AnimalList;
