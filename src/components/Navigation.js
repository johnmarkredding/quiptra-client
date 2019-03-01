import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation = props => {
	const currentNav = {
		welcome: (<Fragment></Fragment>),
		home: (<Fragment><Link to="/log-out">Log Out</Link><Link to="/profile">Profile</Link></Fragment>),
		profile: (<Fragment><Link to="/">Home</Link></Fragment>),
		listing: (<Fragment><Link to="/">Home</Link><Link to="/rent-listing">Rent</Link></Fragment>),
		myListing: (<Fragment><Link to="/my-listings">Back</Link><Link to="/edit-listing">Edit</Link></Fragment>),
		myListings: (<Fragment><Link to="/profile">Back</Link><Link to="/new-listing">New Listing</Link></Fragment>),
		newListing: (<Fragment><Link to="/my-listings">Back</Link></Fragment>),
		signUp: (<Fragment><Link to="/welcome">Back</Link></Fragment>),
		rentalRequests: (<Fragment><Link to="/profile">Back</Link></Fragment>),
		login: (<Fragment><Link to="/welcome">Back</Link></Fragment>),
		editListing: (<Fragment><Link to="/my-listing">Back</Link></Fragment>),
		rentListing: (<Fragment><Link to="/listing">Back</Link></Fragment>),
		myBookings: (<Fragment><Link to="/profile">Back</Link></Fragment>)
	}
	return (
		<nav>
			{currentNav[props.currentNav]}
		</nav>
	);
}

const mapStateToProps = (state) => ({
	currentNav: state.currentNav
});

export default connect(mapStateToProps)(Navigation);


// const welcome = () => (<Fragment><Link to="/login">Login</Link><Link to="/sign-up">Sign Up</Link><Link to="/">Home</Link></Fragment>);
// const home = () => (<Fragment><Link to="/log-out">Log Out</Link><Link to="/profile">Profile</Link></Fragment>);
// const profile = () => (<Fragment><Link to="/">Home</Link></Fragment>);
// const listing = () => (<Fragment><Link to="/">Home</Link><Link to="/rent">Rent</Link></Fragment>);
// const myListing = () => (<Fragment><Link to="/my-listings">My Listings</Link><Link to="/edit">Edit</Link></Fragment>);
// const myListings = () => (<Fragment><Link to="/profile">Profile</Link><Link to="/new-listing">New Listing</Link></Fragment>);
// const newListing = () => (<Fragment><Link to="/my-listings">My Listings</Link></Fragment>);
// const signUp = () => (<Fragment><Link to="/welcome">Back</Link></Fragment>);
// const login = () => (<Fragment><Link to="/welcome">Back</Link></Fragment>);