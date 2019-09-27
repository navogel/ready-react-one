import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	render() {
		console.log("taco is", this.props.taco);
		const fullName = (
			<test>
				{this.props.taco.first} + {this.props.taco.last} <p>YOYOYO</p>
			</test>
		);
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hello Gorgeous, {fullName}</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
