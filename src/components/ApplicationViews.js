import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './home/Home';
import AnimalList from './animal/AnimalList';
import LocationList from './location/LocationList';
import EmployeeList from './employee/EmployeeList';
import OwnerList from './owner/OwnerList';
import AnimalDetail from './animal/AnimalDetail';
import LocationDetail from './location/LocationDetail';
import AnimalForm from './animal/AnimalForm';
import Login from './auth/login';
import AnimalEditForm from './animal/AnimalEditForm';
import EmployeeEditForm from './employee/EmployeeEditForm';
import OwnerEditForm from './owner/OwnerEditForm';
import LocationEditForm from './location/LocationEditForm';
import EmployeeForm from './employee/EmployeeForm';
import EmployeeWithAnimals from './employee/EmployeeWithAnimals';

class ApplicationViews extends Component {
	//check for login before showing content

	render() {
		console.log(this.props.user);
		return (
			<React.Fragment>
				<Route
					exact
					path='/'
					render={props => {
						return <Home />;
					}}
				/>
				<Route
					exact
					path='/animals'
					render={props => {
						if (this.props.user) {
							return <AnimalList {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					exact
					path='/owners'
					render={props => {
						if (this.props.user) {
							return <OwnerList {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					exact
					path='/employees'
					render={props => {
						if (this.props.user) {
							return <EmployeeList {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					exact
					path='/locations'
					render={props => {
						return <LocationList {...props} user={this.props.user} />;
					}}
				/>
				<Route
					exact
					path='/animals/:animalId(\d+)'
					render={props => {
						if (this.props.user) {
							// Pass the animalId to the AnimalDetailComponent
							return (
								<AnimalDetail
									animalId={parseInt(props.match.params.animalId)}
									{...props}
								/>
							);
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/locations/:locationId(\d+)'
					render={props => {
						return (
							<LocationDetail
								locationId={parseInt(props.match.params.locationId)}
								{...props}
								user={this.props.user}
							/>
						);
					}}
				/>
				<Route
					path='/animals/new'
					render={props => {
						if (this.props.user) {
							return <AnimalForm {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/employees/new'
					render={props => {
						if (this.props.user) {
							return <EmployeeForm {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/animals/:animalId(\d+)/edit'
					render={props => {
						if (this.props.user) {
							return <AnimalEditForm {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/employees/:employeeId(\d+)/edit'
					render={props => {
						if (this.props.user) {
							return <EmployeeEditForm {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/owners/:ownerId(\d+)/edit'
					render={props => {
						if (this.props.user) {
							return <OwnerEditForm {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/locations/:locationId(\d+)/edit'
					render={props => {
						if (this.props.user) {
							return <LocationEditForm {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/employees/:employeeId(\d+)/details'
					render={props => {
						if (this.props.user) {
							return <EmployeeWithAnimals {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/login'
					render={props => {
						return <Login setUser={this.props.setUser} {...props} />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
