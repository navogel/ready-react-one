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

class ApplicationViews extends Component {
	//check for login before showing content
	isAuthenticated = () => localStorage.getItem('credentials') !== null;

	render() {
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
						return <AnimalList {...props} />;
					}}
				/>
				<Route
					path='/owners'
					render={props => {
						return <OwnerList />;
					}}
				/>
				<Route
					path='/employees'
					render={props => {
						return <EmployeeList />;
					}}
				/>
				<Route
					exact
					path='/locations'
					render={props => {
						return <LocationList />;
					}}
				/>
				<Route
					path='/animals/:animalId(\d+)'
					render={props => {
						console.log(props, parseInt(props.match.params.animalId));
						// Pass the animalId to the AnimalDetailComponent
						return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />;
					}}
				/>
				<Route
					path='/locations/:locationId(\d+)'
					render={props => {
						console.log(props, parseInt(props.match.params.locationId));
						// Pass the animalId to the AnimalDetailComponent
						return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />;
					}}
				/>
				<Route
					path='/animals/new'
					render={props => {
						return <AnimalForm {...props} />;
					}}
				/>
				<Route path='/login' component={login} />;
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
