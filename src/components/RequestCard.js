import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const RequestCard = ({request}) => {
	return (
		<li>
			<h3>{request.dates.split("-").join("/").split("...").join(" → ")}</h3>
			<p>{request.status}</p>
			<button>Accept</button>
			<button>Deny</button>
		</li>
	);
}

export default withRouter(connect()(RequestCard));