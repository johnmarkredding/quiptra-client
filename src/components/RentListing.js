import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { sendBookingRequest } from "../store/thunks/listingsThunk";
import ListingCard from "./ListingCard";

const RentListing = props => {
	const { currentListing, sendBookingRequest } = props;
	const [dates, setDates] = useState("2019-11-2...2019-12-3");

	useEffect(()=> {
		props.setCurrentNav("rentListing");
	}, [props.currentNav]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentListing) {
			let request = {
				listing_id: currentListing.id,
				dates: dates
			};
			sendBookingRequest(request);
		}
		props.history.push('/');
	}

	const validateAuth = () => {
		if (!currentListing.title) {
			return (
				<Fragment>
					<h2>You need to select a listing!</h2>
					<Link to="/" >Listings</Link>
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<ListingCard listing={currentListing} />
					<h2>{currentListing.title}</h2>
					<form onSubmit={handleSubmit}>
						<button>Submit Request</button>
					</form>
				</Fragment>
			);
		}
	}

	return (
		<section>
			<h1>Rent Form</h1>
			{validateAuth()}
		</section>
	);
}

const mapStateToProps = (state) => ({
	currentNav: state.currentNav,
	currentListing: state.currentListing
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString}),
	sendBookingRequest: (request) => dispatch(sendBookingRequest(request))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RentListing));