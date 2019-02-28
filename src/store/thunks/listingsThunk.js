export const getListings = (searchCity, searchState, searchTerm) => (dispatch) => {
	fetch(`http://localhost:3000/api/v1/listings/?city=${searchCity}&state=${searchState}&term=${searchTerm}`, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem('token')}`,
			"Content-Type": "application/json"
		}
	}).then(r => r.json()).then(j => dispatch({type:"SET_LISTINGS", payload: j}));
}

export const getMyListings = () => (dispatch) => {
	fetch(`http://localhost:3000/api/v1/listings/current`, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem('token')}`,
			"Content-Type": "application/json"
		}
	}).then(r => r.json()).then(j => dispatch({type:"SET_MY_LISTINGS", payload: j}));
}

export const getUser = () => (dispatch) => {
	fetch(`http://localhost:3000/api/v1/users/current`, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem('token')}`,
			"Content-Type": "application/json"
		}
	}).then(r => r.json()).then(j => dispatch({type:"SET_CURRENT_USER", payload: j}));
}
