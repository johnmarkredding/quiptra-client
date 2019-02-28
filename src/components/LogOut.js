import React, { useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = props => {
	useEffect(() => {
		props.setCurrentUser(null);
		localStorage.clear();
	});

	return (<Redirect to="/welcome" />);
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch({type: "SET_CURRENT_NAV", payload: user})
});

export default withRouter(connect(null, mapDispatchToProps)(Home));