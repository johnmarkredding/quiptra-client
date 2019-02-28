import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const NewListing = props => {
	useEffect(()=> {
		props.setCurrentNav("newListing");
	}, [props.currentNav]);

	return (
		<section>
			<h1>New Listing Form</h1>
		</section>
	);
}

const mapStateToProps = (state) => ({
	currentNav: state.currentNav
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default connect(mapStateToProps, mapDispatchToProps)(NewListing);