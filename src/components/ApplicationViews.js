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
						if (this.isAuthenticated()) {
							return <Home />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					exact
					path='/animals'
					render={props => {
						if (this.isAuthenticated()) {
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
						if (this.isAuthenticated()) {
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
						if (this.isAuthenticated()) {
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
						if (this.isAuthenticated()) {
							return <LocationList {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					exact
					path='/animals/:animalId(\d+)'
					render={props => {
						if (this.isAuthenticated()) {
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
						if (this.isAuthenticated()) {
							// Pass the animalId to the AnimalDetailComponent
							return (
								<LocationDetail
									locationId={parseInt(props.match.params.locationId)}
									{...props}
								/>
							);
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/animals/new'
					render={props => {
						if (this.isAuthenticated()) {
							return <AnimalForm {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/employees/new'
					render={props => {
						if (this.isAuthenticated()) {
							return <EmployeeForm {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/animals/:animalId(\d+)/edit'
					render={props => {
						if (this.isAuthenticated()) {
							return <AnimalEditForm {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/employees/:employeeId(\d+)/edit'
					render={props => {
						if (this.isAuthenticated()) {
							return <EmployeeEditForm {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/owners/:ownerId(\d+)/edit'
					render={props => {
						if (this.isAuthenticated()) {
							return <OwnerEditForm {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route
					path='/locations/:locationId(\d+)/edit'
					render={props => {
						if (this.isAuthenticated()) {
							return <LocationEditForm {...props} />;
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>
				<Route path='/login' component={Login} />;
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
