import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMyBookings } from '../store/thunks/listingsThunk';

class MyBookings extends Component {
	componentDidMount() {
		this.props.setCurrentNav("myBookings");
		this.props.getBookings();
	}

	myBookings = () => {
		// return this.props.bookings.map(b => b.renter_id);
		console.log(this.props.bookings);
	}

	render() {
		return (
			<Fragment>
				<section>
					<h1>My Bookings</h1>
					<ul>{this.myBookings()}</ul>
				</section>
			</Fragment>
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
