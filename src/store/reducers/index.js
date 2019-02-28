const initialState = {
	listings:[],
	myListings:[],
	searchTerm: "",
	searchCity: "",
	searchState: "",
	currentUser: null,
	currentListing: {},
	currentMyListing: {},
	currentNav: "welcome"
}

export const rootReducer = (state = initialState, action) => {
	switch(action.type) {
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
