import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const RequestCard = props => {
	return (
		<li>
			props.request.id}
		</li>
	);
}

export default withRouter(connect()(RequestCard));