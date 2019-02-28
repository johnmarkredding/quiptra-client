import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Listing = props => {
	const { listing } = props;
	useEffect(()=> {
		props.setCurrentNav("myListing")
	}, [props.currentNav]);

	return (
		<section className="listing-detail">
			<img alt={listing.title} src={listing.image_url} />
			<h3>{listing.title}</h3>
			<p>{listing.body}</p>
			<p>{listing.city}, {listing.state}</p>
		</section>
	);
}

const mapStateToProps = (state) => ({
	listing: state.currentMyListing,
	currentNav: state.currentNav
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);