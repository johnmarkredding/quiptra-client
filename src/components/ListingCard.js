import React from 'react';
import { connect } from 'react-redux';

const ListingCard = props => {
	const { listing, setCurrentListing } = props;

	const clickHandler = () => {
		console.log("Send to Listing Route")
		setCurrentListing(listing)
	}
	
	return (
		<li className="listing-card" onClick={clickHandler}>
			<img alt={listing.title} src={listing.image_url} />
			<h3>{listing.title}</h3>
			<p>{listing.body}</p>
			<p>{listing.city}, {listing.state}</p>
		</li>
	);
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentListing: (listing) => dispatch({type: "SET_CURRENT_LISTING", payload: listing})
});

export default connect(null, mapDispatchToProps)(ListingCard);