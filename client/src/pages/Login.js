import React, { useRef, useState } from "react";
import LoginForm from "../components/LoginForm";

function Login() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12 ">
					<div style={{ height: "100vh" }}>
						<div className="login-form-wrapper">
							<LoginForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
