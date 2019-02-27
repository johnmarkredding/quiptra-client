import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';

const SignUp = props => {
	const handleSubmit = loginObject => {
		fetch("http://localhost:3000/api/v1/login", {
			method: "Post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(loginObject)
		})
			.then(res => res.json())
			.then(placeTokenAndStoreUser)
	}

	const placeTokenAndStoreUser = (data) => {
		localStorage.setItem("token", data.token);
		props.setCurrentUser(data.user);
	}

	return (
		<Fragment>
			<h1>Sign Up</h1>
			<SignUpForm handleSubmit={handleSubmit}/>
		</Fragment>
	);
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => (dispatch({type: "SET_CURRENT_USER", payload: user}))
});

export default connect(null, mapDispatchToProps)(SignUp);

