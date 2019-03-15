const initialState = {
	listings:[],
	myListings:[],
	myBookings: [],
	rentalRequests: [],
	searchTerm: "",
	searchCity: "",
	searchState: "state",
	currentUser: null,
	currentListing: {},
	bookedDates: [],
	currentMyListing: {},
	currentNav: "welcome"
}

export const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case "CLEAR_STATE":
			return initialState
		case "SET_CURRENT_NAV":
			return {...state, currentNav: action.payload}
		case "SET_CURRENT_USER":
			return {...state, currentUser: action.payload}
		case "SET_CURRENT_LISTING":
			return {...state, currentListing: action.payload}
		case "SET_LISTINGS":
			if (action.payload.message) {
				alert(action.payload.message);
				return state;
			} else {
				return {...state, listings: action.payload}
			}
		case "SET_MY_LISTINGS":
			if (action.payload.message) {
				alert(action.payload.message);
				return state;
			} else {
				return {...state, myListings: action.payload}
			}
		case "ADD_TO_MY_LISTINGS":
			if (action.payload.message) {
				alert(action.payload.message);
				return state;
			} else {
				return {...state, myListings: [...state.myListings, action.payload]};
			}
		case "SET_MY_BOOKINGS":
			if (action.payload.message) {
				alert(action.payload.message);
				return state;
			} else {
				return {...state, myBookings: action.payload}
			}
		case "ADD_TO_MY_BOOKINGS":
			if (action.payload.message) {
				alert(action.payload.message);
				return state;
			} else {
				return {...state, myBookings: [...state.myBookings, action.payload]};
			}
		case "SET_RENTAL_REQUESTS":
			if (action.payload.message) {
				alert(action.payload.message);
				return state;
			} else {
				return {...state, rentalRequests: action.payload}
			}
		case "SET_BOOKED_DATES":
			if (action.payload.message) {
				alert(action.payload.message);
				return state;
			} else {
				return {...state, bookedDates: action.payload}
			}
		case "REMOVE_RENTAL_REQUEST":
			return {...state, rentalRequests: state.rentalRequests.filter(r => r.id !== action.payload)};
		case "SET_CURRENT_MY_LISTING":
			return {...state, currentMyListing: action.payload}
		case "SET_SEARCH_TERM":
			return {...state, searchTerm: action.payload}
		case "SET_SEARCH_CITY":
			return {...state, searchCity: action.payload}
		case "SET_SEARCH_STATE":
			return {...state, searchState: action.payload}
		default:
			return state
	}
}
