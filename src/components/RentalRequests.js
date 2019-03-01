import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RequestCard from './RequestCard';
import { getRentalRequests } from '../store/thunks/listingsThunk';

class RentalRequests extends Component {
	componentDidMount() {
		this.props.setCurrentNav("rentalRequests");
		this.props.getRequests();
	}

	requests = () => {
		return this.props.requests.map(r => <RequestCard key={r.id} request={r} />);
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
	requests: state.rentalRequests
});

const mapDispatchToProps = (dispatch) => ({
	getRequests: () => dispatch(getRentalRequests()),
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RentalRequests));
