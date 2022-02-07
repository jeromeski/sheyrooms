import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useUser } from "../context/user-state";

function Login() {
	const [userInfo, setUserInfo] = useState(null);
	const navigate = useNavigate();

	const { loginUserRequest, loginSuccess, loginFail, user, error, isLoading } = useUser();

	const handleLogin = (event, data) => {
		event.preventDefault();
		loginUserRequest();
		try {
			setUserInfo(data);
		} catch (error) {}
	};

	useEffect(() => {
		if (userInfo) {
			(async () => {
				await axios
					.post(`${process.env.REACT_APP_BACKEND_URL}/login`, userInfo)
					.then(({ data }) => {
						loginSuccess(data);
					})
					.then(() => {
						navigate("/");
					})
					.catch((err) => {
						loginFail();
						console.log(err);
					});
			})();
		}
	}, [userInfo]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12 ">
					<div style={{ height: "100vh" }}>
						<div className="login-form-wrapper">
							<LoginForm handleLogin={handleLogin} error={error} isLoading={isLoading} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
