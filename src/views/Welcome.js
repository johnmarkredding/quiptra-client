import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Welcome = props => {
	useEffect(()=> {
		props.setCurrentNav("welcome")
	}, [props.currentNav]);

	return (
		<Fragment>
			<h1>Welcome</h1>
			<Link to="/sign-up" >Sign Up</Link>
			<Link to="/login" >Login</Link>
		</Fragment>
	);
}
const mapStateToProps = (state) => ({
	currentNav: state.currentNav
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);