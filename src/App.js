import React, { Component } from 'react';
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
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
// import DateRangePicker from '@wojtekmaj/react-daterange-picker';

class App extends Component {
	state = {
		startDate: null,
		endDate: null,
		focusedInput: null
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.setState({ startDate, endDate });
	};

	onFocusChange = (focusedInput) => {
		this.setState({ focusedInput });
	};

	render() {
		const {startDate, endDate, focusedInput} = this.state;
		return (
			<Router>
				<div className="App">
					
					{/*<DateRangePicker required={true} value={[this.state.startDate, this.state.endDate]} returnValue="range" onChange={this.updateDates} />*/}
					<Nav/>
					<Switch>
						<Route path="/welcome" component={Welcome} />
						<Route path="/login" component={Login} />
						<Route path="/log-out" component={LogOut} />
						<Route path="/sign-up" component={SignUp} />
						<Route path="/listing" component={Listing}/>
						<Route path="/profile" component={Profile}/>
						<Route path="/my-bookings" component={MyBookings}/>
						<Route path="/rental-requests" component={RentalRequests}/>
						<Route path="/my-listings" component={MyListings}/>
						<Route path="/my-listing" component={MyListing}/>
						<Route path="/edit-listing" component={EditListing}/>
						<Route path="/new-listing" component={NewListing}/>
						<Route path="/rent-listing" component={RentListing}/>
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString})
});

export default connect(null, mapDispatchToProps)(App);

const datePickerDefaultProps = {
		startDatePlaceholderText: 'Start Date',
		endDatePlaceholderText: 'End Date',
		disabled: false,
		required: false,
		screenReaderInputMessage: '',
		showClearDates: false,
		showDefaultInputIcon: false,
		customInputIcon: null,
		customArrowIcon: null,
		customCloseIcon: null,
		block: false,
		small: false,
		regular: false,

		// calendar presentation and interaction related props
		renderMonthText: null,
		orientation: "horizontal",
		anchorDirection: 'left',
		horizontalMargin: 0,
		withPortal: false,
		withFullScreenPortal: false,
		initialVisibleMonth: null,
		numberOfMonths: 2,
		keepOpenOnDateSelect: false,
		reopenPickerOnClearDates: false,
		isRTL: false,

		// navigation related props
		navPrev: null,
		navNext: null,
		onPrevMonthClick() {},
		onNextMonthClick() {},
		onClose() {},

		// day presentation and interaction related props
		renderCalendarDay: undefined,
		renderDayContents: null,
		minimumNights: 1,
		enableOutsideDays: false,
		isDayBlocked: () => false,
		isDayHighlighted: () => false,
	}

{/*<DateRangePicker
	{...datePickerDefaultProps}
	onDatesChange={this.onDatesChange}
	onFocusChange={this.onFocusChange}
	showClearDates={true}
	startDate={startDate}
	startDateId={"Hi"}
	endDateId={"Bye"}
	endDate={endDate}
	focusedInput={focusedInput}
/>*/}












