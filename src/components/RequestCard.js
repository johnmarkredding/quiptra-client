import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateRequest } from "../store/thunks/listingsThunk";


const RequestCard = ({request, removeRequest, updateRequest}) => {

	const handleApproval = () => {
		updateRequest({id: request.id, status: "approved"});
	}
	const handleDenial = () => {
		updateRequest({id: request.id, status: "denied"});
	}

	return (
		<li>
			<h2>Listing {request.listing_id }. Renter {request.renter_id}</h2>
			<h3>{request.dates.split("-").join("/").split("...").join(" → ")}</h3>
			<p>{request.status}</p>
			<button onClick={handleApproval}>Accept</button>
			<button onClick={handleDenial}>Deny</button>
		</li>
	);
}

const mapDispatchToProps = (dispatch) => ({
	updateRequest: (booking) => {dispatch(updateRequest(booking))}
});

export default withRouter(connect(null, mapDispatchToProps)(RequestCard));