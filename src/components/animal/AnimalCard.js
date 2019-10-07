import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firstLetterCase } from '../../modules/helpers';
import AnimalManager from '../../modules/AnimalManager';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class AnimalCard extends Component {
	handleDelete = id => {
		AnimalManager.delete(id).then(() => this.props.getData());
	};
	render() {
		return (
			<Card className='animalCard'>
				<CardActionArea className='cardActionArea'>
					<Link to={`/animals/${this.props.animal.id}`}>
						<CardMedia
							className='animalCardMedia'
							image={require(`../../images/animals/${this.props.animal.image}`)}
							alt='my dog'
						/>
						<CardContent className='cardContent'>
							<h3>
								Name:{' '}
								<span className='card-petname'>
									{firstLetterCase(this.props.animal.name)}
								</span>
							</h3>
							<p>Breed: {this.props.animal.breed}</p>
						</CardContent>
					</Link>
				</CardActionArea>
				<CardActions className='cardButtons'>
					<Button
						size='small'
						color='primary'
						onClick={() => this.handleDelete(this.props.animal.id)}
					>
						Discharge
					</Button>
					<Button
						size='small'
						color='primary'
						onClick={() => {
							this.props.history.push(`/animals/${this.props.animal.id}/edit`);
						}}
					>
						Edit
					</Button>
					<Link to={`/animals/${this.props.animal.id}`}>
						<Button size='small' color='primary'>
							Info
						</Button>
					</Link>
				</CardActions>
			</Card>
		);
	}
}

export default AnimalCard;
