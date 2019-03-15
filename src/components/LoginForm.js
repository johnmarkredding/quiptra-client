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
			<div className="input-group">
				<input placeholder="Username" required onChange={e => setUsername(e.target.value)} type="text" name="username" value={username}/>
				<input placeholder="Password" required onChange={e => setPassword(e.target.value)} type="password" name="password" value={password}/>
			</div>
			<button>Login</button>
		</form>
	);
}



export default connect()(Login);