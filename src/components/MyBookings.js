import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MyBookings extends Component {
	componentDidMount() {
		this.props.setCurrentNav("myBookings");
	}

	render() {
		return (
			<Fragment>
				<section>
					<h1>My Bookings</h1>
				</section>
			</Fragment>
		);
	}
}


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyBookings));
