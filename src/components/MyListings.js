import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListingCard from './MyListingCard';
import { getMyListings } from '../store/thunks/listingsThunk';

class MyListings extends Component {
	componentDidMount() {
		this.props.setCurrentNav("myListings");
		this.props.getListings();
	}

	listingItems = () => {
		return this.props.listings.map(l => <ListingCard key={l.id} listing={l} />)
	}
	render() {
		return (
			<Fragment>
				<section id="listings">
					<h1>My Listings</h1>
					<ul>
						{this.listingItems()}
					</ul>
				</section>
			</Fragment>
		);
	}
}


const mapStateToProps = (state) => ({
	listings: state.myListings
});

const mapDispatchToProps = (dispatch) => ({
	getListings: () => dispatch(getMyListings()),
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyListings));
