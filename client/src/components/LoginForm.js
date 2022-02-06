import React, { useRef, useState } from "react";
import { Button } from "reactstrap";
import { login } from "../utils";

function LoginForm() {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const emailRef = useRef();
	const passwordRef = useRef();

	const handleLogin = async (event) => {
		event.preventDefault();
		setLoading(true);
		try {
			await login(emailRef.current.value, passwordRef.current.value);
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	};

	const handleShowPassword = (event) => {
		setShowPassword(event.target.checked);
	};
	return (
		<div className="login-form-block">
			{error && (
				<div>
					<p>Oops, there was an error logging you in.</p>
					<p>
						<i>{error.message}</i>
					</p>
				</div>
			)}
			<form>
				<div className="form-group mt-2">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						className="form-control"
						id="email"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
				</div>
				<div className="form-group mt-2">
					<label htmlFor="password">Password</label>
					<input type="password" className="form-control" id="password" placeholder="Password" />
				</div>
				<Button type="submit" className="btn btn-dark mt-4">
					Submit
				</Button>
			</form>
		</div>
	);
}

export default LoginForm;
