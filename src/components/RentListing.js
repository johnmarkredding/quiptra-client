import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { sendBookingRequest, getBookedDates } from "../store/thunks/listingsThunk";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Moment from "moment";


const RentListing = props => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [focusedInput, setFocusedInput] = useState(null);
	const {
		currentListing, sendBookingRequest, setCurrentNav,
		currentNav, bookedDates, getBookedDates, history,
		clearBookedDates
	} = props;


	useEffect(()=> {
		getBookedDates(currentListing.id);
		setCurrentNav("rentListing");
		return clearBookedDates
	}, []);


	const updateDates = ({startDate, endDate}) => {
		setStartDate(startDate);
		setEndDate(endDate);
	};

	const updateFocus = (focus) => {
		setFocusedInput(focus);
		if (focus === "startDate") {
			setStartDate(null);
			setEndDate(null);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentListing) {
			let request = {
				listing_id: currentListing.id,
				dates: dateString(startDate, endDate)
			};
			sendBookingRequest(request);
		}
		history.push('/');
	}

	const isOutsideRange = (date) => {
		if (date.isBefore(new Moment(Moment.now())) || bookedDates.includes(date.format("YYYY-MM-DD"))) {
			return true;
		}
		else if (startDate) {
			let result = false;
			let i = 0;

			while (!result && i < bookedDates.length) {
				let d = bookedDates[i];
				result = (startDate.isSameOrBefore(d) && date.isSameOrAfter(d));
				i++;
			}
			return result;
		} else {
			return false;	
		}
	}


	const validateAuth = () => {
		if (!currentListing.title) {
			return (
				<Fragment>
					<h2>You need to select a listing!</h2>
					<Link to="/" >Listings</Link>
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<DateRangePicker
						{...datePickerDefaultProps}
						onDatesChange={updateDates}
						onFocusChange={updateFocus}
						showClearDates={true}
						startDate={startDate}
						startDateId={"Hi"}
						endDateId={"Bye"}
						endDate={endDate}
						focusedInput={focusedInput}
						withFullScreenPortal={true}
						isOutsideRange={isOutsideRange}
					/>
					<h2>{currentListing.title} {currentListing.id}</h2>
					<form onSubmit={handleSubmit}>
						<button>Submit Request</button>
					</form>
				</Fragment>
			);
		}
	}

	return (
		<section>
			<h1>Rent Form</h1>
			{validateAuth()}
		</section>
	);
}

const mapStateToProps = (state) => ({
	currentNav: state.currentNav,
	bookedDates: state.bookedDates,
	currentListing: state.currentListing
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentNav: (navString) => dispatch({type: "SET_CURRENT_NAV", payload: navString}),
	sendBookingRequest: (request) => dispatch(sendBookingRequest(request)),
	getBookedDates: (id) => dispatch(getBookedDates(id)),
	clearBookedDates: () => dispatch({type: "SET_BOOKED_DATES", payload: []})
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RentListing));

const datePickerDefaultProps = {
	startDatePlaceholderText: 'Start Date',
	endDatePlaceholderText: 'End Date',
	disabled: false,
	required: false,
	screenReaderInputMessage: '',

	// calendar presentation and interaction related props
	renderMonthText: null,
	orientation: "horizontal",
	anchorDirection: 'left',
	horizontalMargin: 0,
	withPortal: false,
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
	minimumNights: 0,
	isDayHighlighted: () => false,
	noBorder: true
};


const dateString = (start, end) => {
	const formattedString = `${start.format('YYYY-MM-DD')}...${end.add(1, "d").format('YYYY-MM-DD')}`;
	return formattedString;
};
