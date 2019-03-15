import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMyBookings } from '../store/thunks/listingsThunk';
import Moment from "moment";

class MyBookings extends Component {
	componentDidMount() {
		this.props.setCurrentNav("myBookings");
		this.props.getBookings();
	}

	dateString = (dates) => {
		let dateArr = dates.split("...");
		return `${dateArr[0]} → ${(new Moment(dateArr[1]).subtract(1, 'days').format("YYYY-MM-DD"))}`
	}

	myBookings = () => {
		return this.props.bookings.map(b => <li key={b.id}>Listing {b.listing_id}. Dates {this.dateString(b.dates)}</li>);
	}

	render() {
		return (
			<section>
				<h1>My Bookings</h1>
				<ul>{this.myBookings()}</ul>
			</section>
		);
	}
}


const mapStateToProps = (state) => ({
	bookings: state.myBookings
});

const mapDispatchToProps = (dispatch) => ({
	getBookings: () => dispatch(getMyBookings()),
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyBookings));
