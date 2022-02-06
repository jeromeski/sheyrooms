import SignupForm from "../components/SignupForm";

export default function Signup() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div style={{ height: "90vh" }}>
						<div className="signup-form-wrapper">
							<div className="signup-form-block">
								<SignupForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
