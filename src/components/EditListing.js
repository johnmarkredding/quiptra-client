import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const EditListing = props => {
	useEffect(()=> {
		props.setCurrentNav("editListing");
	}, [props.currentNav]);

	return (
		<section>
			<h1>Edit Form</h1>
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


export default connect(mapStateToProps, mapDispatchToProps)(EditListing);