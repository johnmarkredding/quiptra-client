import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Home from './views/Home';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Home/>
			</div>
		);
	}
}

export default connect()(App);
