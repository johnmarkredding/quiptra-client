

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateListing } from "../store/thunks/listingsThunk";
import { withRouter, Redirect } from 'react-router-dom';



const EditListing = props => {
	const { currentListing } = props;
	useEffect(()=> {
		props.setCurrentNav("editListing");
	}, [props.currentNav]);

	const [state, setState] = useState(currentListing.state);
	const [city, setCity] = useState(currentListing.city);
	const [title, setTitle] = useState(currentListing.title);
	const [image, setImage] = useState(currentListing.image_url);
	const [body, setBody] = useState(currentListing.body);
	const [price, setPrice] = useState(currentListing.price);
	const [email, setEmail] = useState(currentListing.email);
	const [phone, setPhone] = useState(currentListing.phone);
	const [street, setStreet] = useState(currentListing.street_address);


	const handleSubmit = (e) => {
		e.preventDefault();
		props.updateListing({
			state,
			city,
			title,
			price,
			body,
			email,
			phone,
			id: currentListing.id,
			image_url: image,
			street_address: street
		});
		props.history.push("/my-listings")
	}

	const validateCurrentListingExists = () => {
		if (!currentListing.id) {
			return <Redirect to="/my-listings" />;
		} else {
			return (
				<section id="edit-listing">
					<h1>Edit Listing</h1>
					<form onSubmit={handleSubmit}>
						<div className="input-group">
							<input required className="title-input" type="text" name="title" placeholder="Listing title" onChange={e => setTitle(e.target.value)} value={title}/>
							<input required className="image-input" type="text" name="image" placeholder="Image URL" onChange={e => setImage(e.target.value)} value={image}/>
							<input required className="body-input" type="text" name="body" placeholder="Body" onChange={e => setBody(e.target.value)} value={body}/>
							<input required className="price-input" type="number" name="price" placeholder="Price per day" onChange={e => setPrice(e.target.value)} value={price}/>
							<input required className="email-input" type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email}/>
							<input required className="phone-input" type="text" name="phone" placeholder="Phone" onChange={e => setPhone(e.target.value)} value={phone}/>
							<input required className="street-input" type="text" name="street" placeholder="Street address" onChange={e => setStreet(e.target.value)} value={street}/>
							<input required className="city-input" type="text" name="city" placeholder="City" onChange={e => setCity(e.target.value)} value={city}/>
							<select required className="state-input" style={state === "state" ? {"color":"rgba(175,168,171,1)"} : null} name="state" onChange={e => setState(e.target.value)} value={state}>
								<option value="state">State</option>
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
						</div>
						<button>Save</button>
					</form>
				</section>
			);
		}
	}

	return validateCurrentListingExists();
}

const mapStateToProps = (state) => ({
	currentNav: state.currentNav,
	currentListing: state.currentMyListing
});
const mapDispatchToProps = (dispatch) => ({
	updateListing: (listing) => dispatch(updateListing(listing)),
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditListing));






