import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const RentListing = props => {
	useEffect(()=> {
		props.setCurrentNav("rentListing");
	}, [props.currentNav]);

	return (
		<section>
			<h1>Rent Form</h1>
			<form>
				<input type="text" placeholder="Title"/>
				<input type="textarea" placeholder="Body"/>
				<input type="number" placeholder=""/>
				<button>Save</button>
			</form>
		</section>
	);
}

const mapStateToProps = (state) => ({
	currentNav: state.currentNav
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default connect(mapStateToProps, mapDispatchToProps)(RentListing);