import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RequestCard from './RequestCard';
import { getMyListings } from '../store/thunks/listingsThunk';

class RentalRequests extends Component {
	componentDidMount() {
		this.props.setCurrentNav("rentalRequests");
		this.props.getListings("rentalRequests");
	}

	requests = () => {
		const bookingsArrays = this.props.listings.map(l => l.bookings);
		const requestArr = flatten(bookingsArrays);
		return requestArr.map(b => <RequestCard key={b.id} request={b} />);
	}
	render() {
		return (
			<Fragment>
				<section>
					<h1>Rentals Requests</h1>
					<ul>
						{this.requests()}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RentalRequests));


const flatten = (arr) => {
	let newArr = [];
	for (let x in arr) {
		newArr.push(...arr[x]);
	}
	return newArr;
}


