import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

const Listing = props => {
	const { listing } = props;
	useEffect(()=> {
		props.setCurrentNav("myListing")
	}, [props.currentNav]);

	const validateCurrentListingExists = () => {
		if (!listing.id) {
			return <Redirect to="/my-listings" />;
		} else {
			return (
				<section className="listing-detail">
					<img alt={listing.title} src={listing.image_url} />
					<h3>{listing.title}</h3>
					<p>{listing.body}</p>
					<p>{listing.city}, {listing.state}</p>
				</section>
			);
		}
	}

	return validateCurrentListingExists();
}

const mapStateToProps = (state) => ({
	listing: state.currentMyListing,
	currentNav: state.currentNav
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Listing));