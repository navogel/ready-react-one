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
						Owner: <span className='card-ownerename'>Louis</span>
					</h3>
					<p>Hair Style: Ok</p>
				</div>
			</div>
		);
	}
}

export default OwnerCard;
