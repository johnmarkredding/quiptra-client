import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMyBookings } from '../store/thunks/listingsThunk';
import Moment from "moment";
import { getListings } from '../store/thunks/listingsThunk';




const MyBookings = props => {
	useEffect(() => {
		props.getListings("", "state", "");
		props.setCurrentNav("myBookings");
		props.getBookings();
	}, []);

	const dateString = (dates) => {
		let dateArr = dates.split("...");
		return `${dateArr[0]} → ${(new Moment(dateArr[1]).subtract(1, 'days').format("YYYY-MM-DD"))}`
	}

	const handleClick = (id) => {
		let currentListing = props.listings.find(l=>l.id === id);
		props.setCurrentListing(currentListing);
		props.history.push("/listing");
	}

	const myBookings = () => {
		return props.bookings.map(b => <li key={b.id} onClick={() => handleClick(b.listing_id)}><p>{b.title}</p><p>{dateString(b.dates)}</p></li>);
	}

	return (
		<section>
			<h1>My Bookings</h1>
			<ul className="my-bookings">{myBookings()}</ul>
		</section>
	);
}


const mapStateToProps = (state) => ({
	bookings: state.myBookings,
	listings: state.listings,
	currentListing: state.currentListing
});

const mapDispatchToProps = dispatch => ({
	getListings: (city, searchState, term) => dispatch(getListings(city, searchState, term)),
	getBookings: () => dispatch(getMyBookings()),
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString}),
	setCurrentListing: (listing) => dispatch({type: "SET_CURRENT_LISTING", payload: listing})
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyBookings));
