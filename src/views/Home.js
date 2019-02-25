import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
	componentDidMount() {
		this.getListings();
	}

	getListings = () => {
		fetch(`http://localhost:3000/api/v1/listings/?city=${""}&state=${""}&term=${""}`, {
			method: "GET",
			headers: {
				"Authorization": `Basic ${localStorage.getItem('token')}`,
				"Content-Type": "application/json"
			}
		}).then(r=>r.json()).then(console.log);
	}

	render() {
		return (
			<Fragment>
				<h1>Home</h1>
			</Fragment>
		);
	}
}

export default connect()(Home);