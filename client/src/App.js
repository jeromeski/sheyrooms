import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./components/Booking";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export default function App() {
	return (
		<>
			<Navbar />
			<div>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/booking/:id" element={<Booking />} exact />
						<Route path="/signup" element={<Signup />} exact />
						<Route path="/login" element={<Login />} exact />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}
