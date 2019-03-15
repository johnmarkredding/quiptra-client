import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Login from './views/Login';
import LogOut from './components/LogOut';
import SignUp from './views/SignUp';
import Home from './views/Home';
import Welcome from './views/Welcome';
import Nav from './components/Navigation';
import Listing from './components/Listing';
import Profile from './components/Profile';
import MyBookings from './components/MyBookings';
import RentalRequests from './components/RentalRequests';
import MyListings from './components/MyListings';
import MyListing from './components/MyListing';
import EditListing from './components/EditListing';
import RentListing from './components/RentListing';
import NewListing from './components/NewListing';

const App = props => {
	return (
		<Router>
			<div className="App">
				<Nav/>
				<Switch>
					<Route path="/welcome" component={Welcome}/>
					<Route path="/login" component={Login}/>
					<Route path="/sign-up" component={SignUp}/>
					<Route path="/log-out" component={LogOut}/>
					<Route path="/listing" component={Listing}/>
					<Route path="/profile" component={Profile}/>
					<Route path="/my-bookings" component={MyBookings}/>
					<Route path="/rental-requests" component={RentalRequests}/>
					<Route path="/my-listings" component={MyListings}/>
					<Route path="/my-listing" component={MyListing}/>
					<Route path="/edit-listing" component={EditListing}/>
					<Route path="/new-listing" component={NewListing}/>
					<Route path="/rent-listing" component={RentListing}/>
					<Route path="/" component={Home}/>
				</Switch>
			</div>
		</Router>
	);
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default connect(null, mapDispatchToProps)(App);
