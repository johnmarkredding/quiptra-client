import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const Login = props => {
	return (
		<Fragment>
			<h1>Login</h1>
			<LoginForm handleSubmit={handleSubmit}/>
		</Fragment>
	);
}

const handleSubmit = loginObject => {
	fetch("http://localhost:3000/api/v1/login", {
		method: "Post",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(loginObject)
	})
		.then(res => res.json())
		.then(json => localStorage.setItem("token", json.token))
}

export default connect()(Login);