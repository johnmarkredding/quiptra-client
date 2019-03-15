import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../store/thunks/listingsThunk';

const Profile = props => {
	useEffect(()=> {
		props.setCurrentNav("profile");
	}, [props.currentNav]);
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<section>
			<h1>Profile</h1>
			{!!user ? (<Fragment><h2>{user.name}</h2><h3>@{user.username}</h3><h3>{user.bio}</h3></Fragment>) : null}
			<nav className="round-button-nav">
				<Link className="round-button-vin-rouge" to="/my-listings">My Listings</Link>
				<Link className="round-button-vin-rouge" to="/my-bookings">My Bookings</Link>
				<Link className="round-button-vin-rouge" to="/rental-requests">Rental Requests</Link>
			</nav>
		</section>
	);
}
const mapStateToProps = (state) => ({
	currentNav: state.currentNav,
});
const mapDispatchToProps = (dispatch) => ({
	getUser: () => dispatch(getUser()),
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);