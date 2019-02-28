import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { withRouter } from 'react-router-dom';


const SignUp = props => {

	useEffect(()=> {
		props.setCurrentNav("signUp")
	}, [props.currentNav]);


	const handleSubmit = loginObject => {
		fetch("http://localhost:3000/api/v1/login", {
			method: "Post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(loginObject)
		})
			.then(res => res.json())
			.then(placeTokenAndStoreUser);
	}

	const placeTokenAndStoreUser = (data) => {
		if(!!data.message) {
			alert(data.message);
		} else {
			localStorage.setItem("token", data.token);
			props.setCurrentUser(data.user);
			props.history.push("/");
		}
	}

	return (
		<Fragment>
			<h1>Sign Up</h1>
			<SignUpForm handleSubmit={handleSubmit}/>
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	listing: state.currentListing,
	currentNav: state.currentNav
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => (dispatch({type: "SET_CURRENT_USER", payload: user})),
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));

