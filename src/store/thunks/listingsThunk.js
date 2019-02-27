export const getListings = (searchCity, searchState, searchTerm) => (dispatch) => {
	fetch(`http://localhost:3000/api/v1/listings/?city=${searchCity}&state=${searchState}&term=${searchTerm}`, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem('token')}`,
			"Content-Type": "application/json"
		}
	}).then(r => r.json()).then(j => dispatch({type:"SET_LISTINGS", payload: j}));
}


// setListings: (data) => {
// 	if (data.message) {
// 		alert(data.message);
// 	} else {
// 		dispatch({type: "SET_LISTINGS", payload: data});
// 	}
// }