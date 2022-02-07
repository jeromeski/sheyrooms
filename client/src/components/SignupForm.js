import { useState } from "react";
import { Button } from "reactstrap";

export default function SignupForm({ handleSignup }) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<form onSubmit={handleSignup}>
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					className="form-control"
					id="name"
					aria-describedby="nameHelp"
					placeholder="Enter Name"
				/>
				<small id="nameHelp" className="form-text text-muted">
					Please use your complete name.
				</small>
			</div>
			<div className="form-group">
				<label htmlFor="email">Email address</label>
				<input
					type="email"
					className="form-control"
					id="email"
					aria-describedby="emailHelp"
					placeholder="Enter email"
				/>
				<small id="emailHelp" className="form-text text-muted">
					We'll never share your email with anyone else.
				</small>
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type={showPassword ? "text" : "password"}
					className="form-control"
					id="password"
					placeholder="Password"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="cPassword">Confirm Password</label>
				<input
					type={showPassword ? "text" : "password"}
					className="form-control"
					id="cPassword"
					placeholder="Confirm Password"
				/>
			</div>
			<Button type="submit" className="btn btn-dark mt-3">
				Submit
			</Button>
		</form>
	);
}
