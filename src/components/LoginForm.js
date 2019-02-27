import React, { useState } from 'react';
import { connect } from 'react-redux';

const Login = props => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		props.handleSubmit({username, password});
		setUsername("");
		setPassword("")
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="username">Username</label>
			<input required onChange={e => setUsername(e.target.value)} type="text" name="username" value={username}/>
			<label htmlFor="password">Password</label>
			<input required onChange={e => setPassword(e.target.value)} type="password" name="password" value={password}/>
			<button>Submit</button>
		</form>
	);
}



export default connect()(Login);