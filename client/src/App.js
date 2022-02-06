import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./components/Booking";

export default function App() {
	return (
		<>
			<Navbar />
			<div>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/booking/:id" element={<Booking />} exact />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}
