import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<button
								className="btn btn-link nav-link"
								aria-current="page"
								onClick={() => navigate("/register")}>
								Register
							</button>
						</li>
						<li className="nav-item">
							<button className="btn btn-link nav-link" onClick={() => navigate("/login")}>
								Login
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
