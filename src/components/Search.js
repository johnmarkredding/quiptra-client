import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListings } from '../store/thunks/listingsThunk';

class Search extends Component {

	componentDidMount() {
		this.props.getListings(this.props.city, this.props.state, this.props.term);
	}

	submitSearch = (e) => {
		e.preventDefault();
		this.props.getListings(this.props.city, this.props.state, this.props.term)
	}

	render() {
		const {city, state, term} = this.props;
		return (
			<form onSubmit={this.submitSearch}>
				<input onChange={e => this.props.setCity(e.target.value)} type="text" name="city" value={city} placeholder="City"/>
				<select name="state" onChange={e => this.props.setState(e.target.value)} value={state}>
					<option value=""> </option>
					<option value="AL">AL</option>
					<option value="AK">AK</option>
					<option value="AR">AR</option>	
					<option value="AZ">AZ</option>
					<option value="CA">CA</option>
					<option value="CO">CO</option>
					<option value="CT">CT</option>
					<option value="DC">DC</option>
					<option value="DE">DE</option>
					<option value="FL">FL</option>
					<option value="GA">GA</option>
					<option value="HI">HI</option>
					<option value="IA">IA</option>	
					<option value="ID">ID</option>
					<option value="IL">IL</option>
					<option value="IN">IN</option>
					<option value="KS">KS</option>
					<option value="KY">KY</option>
					<option value="LA">LA</option>
					<option value="MA">MA</option>
					<option value="MD">MD</option>
					<option value="ME">ME</option>
					<option value="MI">MI</option>
					<option value="MN">MN</option>
					<option value="MO">MO</option>	
					<option value="MS">MS</option>
					<option value="MT">MT</option>
					<option value="NC">NC</option>	
					<option value="NE">NE</option>
					<option value="NH">NH</option>
					<option value="NJ">NJ</option>
					<option value="NM">NM</option>			
					<option value="NV">NV</option>
					<option value="NY">NY</option>
					<option value="ND">ND</option>
					<option value="OH">OH</option>
					<option value="OK">OK</option>
					<option value="OR">OR</option>
					<option value="PA">PA</option>
					<option value="RI">RI</option>
					<option value="SC">SC</option>
					<option value="SD">SD</option>
					<option value="TN">TN</option>
					<option value="TX">TX</option>
					<option value="UT">UT</option>
					<option value="VT">VT</option>
					<option value="VA">VA</option>
					<option value="WA">WA</option>
					<option value="WI">WI</option>	
					<option value="WV">WV</option>
					<option value="WY">WY</option>
				</select>
				<input onChange={e => this.props.setTerm(e.target.value)} type="text" name="term" value={term} placeholder="What do you need?"/>
				<button>Submit</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	city: state.searchCity,
	state: state.searchState,
	term: state.searchTerm
});

const mapDispatchToProps = (dispatch) => ({
	getListings: (city, searchState, term) => dispatch(getListings(city, searchState, term)),
	setCity: (city) => dispatch({type: "SET_SEARCH_CITY", payload: city}),
	setState: (state) => dispatch({type: "SET_SEARCH_STATE", payload: state}),
	setTerm: (term) => dispatch({type: "SET_SEARCH_TERM", payload: term})
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);