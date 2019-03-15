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
			<div className="input-group">
				<input placeholder="Name" required onChange={e => setName(e.target.value)} type="text" name="name" value={name}/>
				<input placeholder="Username" required onChange={e => setUsername(e.target.value)} type="text" name="username" value={username}/>
				<input placeholder="Password" required onChange={e => setPassword(e.target.value)} type="password" name="password" value={password}/>
			</div>
			<button>Sign Up</button>
		</form>
	);
}



export default connect()(SignUp);