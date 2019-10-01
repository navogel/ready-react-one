import React, { Component } from 'react';

class OwnerCard extends Component {
	render() {
		return (
			<div className='card'>
				<div className='card-content'>
					<picture>
						<img src={require('./2.png')} alt='Owner' />
					</picture>
					<h3>
						Owner: <span className='card-ownerename'>{this.props.owner.name}</span>
					</h3>

					<p>Hair Style: Ok</p>
					<button type='button' onClick={() => this.props.deleteOwner(this.props.owner.id)}>
						GHOST OWNER, STEAL DOG
					</button>
				</div>
			</div>
		);
	}
}

export default OwnerCard;
