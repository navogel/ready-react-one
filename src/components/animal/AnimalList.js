import React, { Component } from 'react';
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';
import './animal.css';
import ButtonAppBar from '../nav/AnimalBar';
import SimpleMenu from '../nav/AddMenu';
import SwitchLabels from '../nav/viewcontroller';
import SimpleTable from '../animal/AnimalTable';
import FormDialog from '../nav/addAnimalModal';

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

	changeView = () => {
		if (this.state.cardView === true) {
			this.setState({
				cardView: false
			});
		} else {
			this.setState({
				cardView: true
			});
		}
	};

	componentDidMount() {
		//getAll from AnimalManager and hang on to that data; put it in state
		AnimalManager.getAll().then(animals => {
			this.setState({
				animals: animals
			});
		});
	}

	render() {
		return (
			<>
				<ButtonAppBar {...this.props} page='Animals' />
				<section className='section-content'>
					{/* <div>
						<MouseOverPopoverAnimal />
					</div> */}
					<div
						className='addViewRow'
						// onClick={() => {
						// 	this.changeView();
						// 	console.log('clicky', this.state.cardView);
						// }}
					>
						<SimpleMenu {...this.props} />
						<SwitchLabels changeView={this.changeView} />
					</div>
					<FormDialog {...this.props} getData={this.getData} />
				</section>
				{this.state.cardView ? (
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
				) : (
					<div className='container-table'>
						<SimpleTable
							animals={this.state.animals}
							getData={this.getData}
							{...this.props}
						/>
					</div>
				)}
			</>
		);
	}
}

export default AnimalList;
