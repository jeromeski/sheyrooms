import { useAxios } from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function Booking() {
	const { id } = useParams();
	const { data, isLoading, error } = useAxios(`${process.env.REACT_APP_BACKEND_URL}/room/${id}`);
	const [room, setRoom] = useState();

	useEffect(() => {
		if (data) {
			setRoom(data);
		}
	}, [data]);

	return (
		<>
			{isLoading ? (
				<h1>Loading...</h1>
			) : error ? (
				<h1>Error...</h1>
			) : (
				room && (
					<div className="container">
						<div className="row justify-content-center mt-5">
							<div className="col-md-5">
								<h1>{room.name}</h1>
								<img src={room.imageurls[0]} alt="" />
							</div>
							<div className="col-md-5">
								<div style={{ textAlign: "right" }}>
									<div>
										<h1>Booking Details</h1>
										<hr />
										<br />
									</div>
									<div>
										<p>Name:</p>
										<p>From Date:</p>
										<p>To Date:</p>
										<p>Maxcount:</p>
										<h1>Amount</h1>
										<br />
										<hr />
									</div>
									<div>
										<p>Total Days:</p>
										<p>Rent Per Day:</p>
										<h1>Total Amount:</h1>
										<Button className="btn btn-dark">Pay now</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			)}
		</>
	);
}
