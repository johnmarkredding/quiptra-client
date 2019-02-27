import React from 'react';
import { connect } from 'react-redux';

const Listing = props => {
	const { listing } = props;
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
	listing: state.currentListing
});

export default connect(mapStateToProps)(Listing);