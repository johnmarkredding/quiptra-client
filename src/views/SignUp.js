import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';

const SignUp = props => {
	return (
		<Fragment>
			<h1>Sign Up</h1>
			<SignUpForm handleSubmit={handleSubmit}/>
		</Fragment>
	);
}

const handleSubmit = signUpObject => {
	fetch("http://localhost:3000/api/v1/sign-up", {
		method: "Post",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(signUpObject)
	})
		.then(res => res.json())
		.then(json => localStorage.setItem("token", json.token))
}

export default connect()(SignUp);