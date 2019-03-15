import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Welcome = props => {
	useEffect(()=> {
		props.setCurrentNav("welcome")
	}, [props.currentNav]);

	return (
		<section id="welcome">
			<h3>Welcome to</h3>
			<h1>Quiptra</h1>
			<h3>Feel free to</h3>
			<nav className="round-button-nav">
				<Link className="round-button-carnation" to="/login" >Login</Link>
				<Link className="round-button-vin-rouge" to="/sign-up" >Sign Up</Link>
			</nav>
		</section>
	);
}
const mapStateToProps = (state) => ({
	currentNav: state.currentNav
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);