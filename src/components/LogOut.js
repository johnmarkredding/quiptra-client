import React, { useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = props => {
	useEffect(() => {
		localStorage.clear();
		props.clearState();
	});

	return (<Redirect to="/welcome" />);
}

const mapDispatchToProps = (dispatch) => ({
	clearState: () => dispatch({type: "CLEAR_STATE", payload: null})
});

export default withRouter(connect(null, mapDispatchToProps)(Home));