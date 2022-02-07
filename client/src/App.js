/* eslint-disable import/no-anonymous-default-export */
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./components/Booking";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserProvider from "./context/user-state";

function App() {
	return (
		<>
			<div>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/booking/:id" element={<Booking />} exact />
						<Route path="/register" element={<Signup />} exact />
						<Route path="/login" element={<Login />} exact />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default () => {
	return (
		<UserProvider>
			<App />
		</UserProvider>
	);
};
