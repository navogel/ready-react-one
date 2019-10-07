import React, { useState } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';
import './animal.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const AnimalListHook = props => {
	const [animals, setAnimals] = useState([]);

	const getData = () => {
		AnimalManager.getAll().then(newAnimals => {
			setAnimals({
				animals: newAnimals
			});
		});
	};

	AnimalManager.getAll().then(animals => {
		setAnimals({
			animals: animals
		});
	});

	console.log(animals);

	return (
		<>
			<section className='section-content'>
				<Fab
					color='primary'
					aria-label='add'
					onClick={() => {
						this.props.history.push('/animals/new');
					}}
				>
					<AddIcon />
				</Fab>
			</section>
			<div className='container-cards'>
				{animals.forEach(animal => {
					<AnimalCard
						key={animal.id}
						animal={animal}
						getData={getData}
						{...props}
					/>;
				})}
			</div>
		</>
	);
};

export default AnimalListHook;
