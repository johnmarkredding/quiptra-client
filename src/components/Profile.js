import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../store/thunks/listingsThunk';

const Profile = props => {
	useEffect(()=> {
		props.getUser();
		props.setCurrentNav("profile");
	}, [props.currentNav]);

	return (
		<Fragment>
			<h1>Profile</h1>
			{!!props.currentUser ? (<p>{props.currentUser.id} : {props.currentUser.name}</p>) : null}
			{!!props.currentUser ? (<p>@{props.currentUser.username}</p>) : null}
			<Link to="/my-listings">My Listings</Link>
			<Link to="/my-bookings">My Bookings</Link>
			<Link to="/rental-requests">Rental Requests</Link>
		</Fragment>
	);
}
const mapStateToProps = (state) => ({
	currentNav: state.currentNav,
	currentUser: state.currentUser
});
const mapDispatchToProps = (dispatch) => ({
	getUser: () => dispatch(getUser()),
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);