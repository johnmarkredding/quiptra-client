import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const MyListingCard = props => {
	const { listing, setCurrentListing } = props;

	const clickHandler = () => {
		setCurrentListing(listing)
		props.history.push("/my-listing");
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
	setCurrentListing: (listing) => dispatch({type: "SET_CURRENT_MY_LISTING", payload: listing})
});

export default withRouter(connect(null, mapDispatchToProps)(MyListingCard));