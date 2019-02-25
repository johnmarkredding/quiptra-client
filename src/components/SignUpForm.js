import React, { useState } from 'react';
import { connect } from 'react-redux';

const SignUp = props => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		props.handleSubmit({name, username, password});
		setName("");
		setUsername("");
		setPassword("")
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input required onChange={e => setName(e.target.value)} type="text" name="name" value={name}/>
			<label htmlFor="username">Username</label>
			<input required onChange={e => setUsername(e.target.value)} type="text" name="username" value={username}/>
			<label htmlFor="password">Password</label>
			<input required onChange={e => setPassword(e.target.value)} type="password" name="password" value={password}/>
			<button>Submit</button>
		</form>
	);
}



export default connect()(SignUp);