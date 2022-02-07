import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import { useUser } from "../context/user-state";

export default function Signup() {
	const [userInfo, setUserInfo] = useState(null);
	const navigate = useNavigate();

	const { registerUserRequest, registerUserSuccess, registerUserFail, clearErrors, user } =
		useUser();

	console.log(user);

	const handleSignup = (event) => {
		event.preventDefault();
		const [name, email, password, cPassword] = event.target.elements;
		try {
			const user = {
				name: name.value,
				email: email.value,
				password: password.value,
				cPassword: cPassword.value
			};
			setUserInfo(user);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		let current = true;
		if (current) {
			registerUserRequest();
			if (userInfo) {
				(async () => {
					await axios
						.post(`${process.env.REACT_APP_BACKEND_URL}/register`, userInfo)
						.then(({ data }) => {
							registerUserSuccess(data);
						})
						.catch((err) => {
							registerUserFail(err);
						});
				})();
			}
		}
		return () => (current = false);
	}, [userInfo]);

	useEffect(() => {
		if (user) {
			navigate("/login");
		}
	}, [user]);
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div style={{ height: "90vh" }}>
						<div className="signup-form-wrapper">
							<div className="signup-form-block">
								<SignupForm handleSignup={handleSignup} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}