import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ListingCard from './ListingCard';
import Search from './Search';

const Listings = props => {
	const listingItems = () => {
		return props.listings.map(l => <ListingCard key={l.id} listing={l} />)
	}
	return (
		<Fragment>
			<Search/>
			<section id="listings">
				<h2>Listings</h2>
				<ul>
					{listingItems()}
				</ul>
			</section>
		</Fragment>
	);
}


const mapStateToProps = (state) => ({
	listings: state.listings
});

export default connect(mapStateToProps)(Listings);
