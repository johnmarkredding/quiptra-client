const initialState = {
	listings:[],
	searchTerm: "",
	searchCity: "",
	searchState: "",
	currentUser: {},
	currentListing: {}
}

export const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case "SET_CURRENT_USER":
			return {...state, currentUser: action.payload}
		case "SET_CURRENT_LISTING":
			return {...state, currentListing: action.payload}
		case "SET_LISTINGS":
			return {...state, listings: action.payload}
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