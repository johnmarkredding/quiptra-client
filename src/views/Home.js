import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import Listings from '../components/Listings';
import Listing from '../components/Listing';

const Home = () => {
	return (
		<Router>
			<Fragment>
				<Link to="/profile">Profile</Link>
				<Link to="/listing">Listing</Link>
				<Link to="/">Home</Link>
				<h1>Home</h1>
				<Switch>
					<Route path="/profile" component={Listings}/>
					<Route path="/listing" component={Listing}/>
					<Route path="/" component={Listings}/>
				</Switch>
			</Fragment>
		</Router>
	);
}

export default connect()(Home);