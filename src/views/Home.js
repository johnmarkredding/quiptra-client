import React, { Fragment, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Listings from '../components/Listings';

const Home = props => {
	useEffect(()=> {
		props.setCurrentNav("home")
	}, [props.currentNav]);

	const ensureLoggedIn = () => {
		if(!localStorage.getItem("token")) {
			return <Redirect to="/welcome" />;
		} else {
			return (
				<Fragment>
					<h1>Home</h1>
					<Listings/>
				</Fragment>
			);
		}
	}
	return (ensureLoggedIn());
}

const mapStateToProps = (state) => ({
	currentNav: state.currentNav
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));