import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Home from './views/Home';
import Welcome from './views/Home';

//Temp Import
import Listing from './components/Listing';


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Link to='/'>Home</Link>
					<Link to='/login'>Login</Link>
					<Link to='/sign-up'>Sign Up</Link>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/sign-up" component={SignUp} />
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default connect()(App);






// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic}/>
//     <Route exact path={match.path} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr/>

//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )

