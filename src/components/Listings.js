import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import ListingCard from './ListingCard';
import Search from './Search';

class Listings extends Component {
	listingItems() {
		return this.props.listings.map(l => <ListingCard key={l.id} listing={l} />)
	}

	render() {
		return (
			<Fragment>
				<Search/>
				<section id="listings">
					<h2>Listings</h2>
					<ul>
						{this.listingItems()}
					</ul>
				</section>
			</Fragment>
		);
	}
}


const mapStateToProps = (state) => ({
	listings: state.listings
});

export default connect(mapStateToProps)(Listings);
