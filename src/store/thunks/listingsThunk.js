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

export const getMyBookings = () => (dispatch) => {
	fetch(`http://localhost:3000/api/v1/bookings/current`, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem('token')}`,
			"Content-Type": "application/json"
		}
	}).then(r => r.json()).then(j => dispatch({type:"SET_MY_BOOKINGS", payload: j}));
}

export const getRentalRequests = () => (dispatch) => {
	fetch(`http://localhost:3000/api/v1/bookings/pending`, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem('token')}`,
			"Content-Type": "application/json"
		}
	}).then(r => r.json()).then(j => dispatch({type:"SET_RENTAL_REQUESTS", payload: j}));
}

export const getBookedDates = (id) => (dispatch) => {
	fetch(`http://localhost:3000/api/v1/listings/${id}/booked-dates`, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem('token')}`,
			"Content-Type": "application/json"
		}
	}).then(r => r.json()).then(j => dispatch({type:"SET_BOOKED_DATES", payload: j}));
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

export const sendBookingRequest = (request) => (dispatch) => {
	fetch(`http://localhost:3000/api/v1/bookings`, {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem('token')}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(request)
	}).then(r => r.json()).then(j => dispatch({type:"ADD_TO_MY_BOOKINGS", payload: j}));
}

export const updateRequest = (request) => (dispatch) => {
	fetch(`http://localhost:3000/api/v1/bookings/${request.id}`, {
		method: "PATCH",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem('token')}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(request)
	})
		.then(r => r.json())
		.then((j) => {
			if (!!j.message) {
				alert(j.message);
			} else {
				dispatch({type: "REMOVE_RENTAL_REQUEST", payload: j.id})
			}
		});
}
