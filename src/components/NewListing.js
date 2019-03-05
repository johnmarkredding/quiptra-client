import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createListing } from "../store/thunks/listingsThunk";


const NewListing = props => {
	useEffect(()=> {
		props.setCurrentNav("newListing");
	}, [props.currentNav]);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.createListing({});
	}

	return (
		<section>
			<h1>New Listing Form</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" />
				<button>Submit</button>
			</form>
		</section>
	);
}

const mapStateToProps = (state) => ({
	currentNav: state.currentNav
});
const mapDispatchToProps = (dispatch) => ({
	createListing: (listing) => dispatch(createListing(listing)),
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default connect(mapStateToProps, mapDispatchToProps)(NewListing);