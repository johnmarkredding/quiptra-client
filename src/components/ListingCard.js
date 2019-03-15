import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ListingCard = props => {
	const { listing, setCurrentListing } = props;

	const clickHandler = () => {
		setCurrentListing(listing)
		props.history.push("/listing");
	}
	
	return (
		<li className="listing-card" onClick={clickHandler}>
			<img alt={listing.title} src={listing.image_url} />
			<h3>{listing.title}</h3>
			<h4>${listing.price}/day</h4>
			<p>{listing.city}, {listing.state}</p>
		</li>
	);
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentListing: (listing) => dispatch({type: "SET_CURRENT_LISTING", payload: listing})
});

export default withRouter(connect(null, mapDispatchToProps)(ListingCard));