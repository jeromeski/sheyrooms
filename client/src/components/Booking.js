import { useAxios } from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import moment from "moment";

export default function Booking() {
	const { id } = useParams();
	const { data, isLoading, error } = useAxios(`${process.env.REACT_APP_BACKEND_URL}/room/${id}`);

	const { fromDate, toDate } = useParams();

	const _fromDate = moment(fromDate, "DD-MM-YYYY");
	const _toDate = moment(toDate, "DD-MM-YYYY");
	const totalDays = moment.duration(_toDate.diff(_fromDate)).asDays() + 1;

	return (
		<>
			{isLoading ? (
				<h1>Loading...</h1>
			) : error ? (
				<h1>Error...</h1>
			) : (
				data && (
					<div className="container">
						<div className="row justify-content-center mt-5">
							<div className="col-md-6">
								<h1>{data.name}</h1>
								<img src={data.imageurls[0]} alt="" />
							</div>
							<div className="col-md-4">
								<div style={{ textAlign: "right" }}>
									<div>
										<h1>Booking Details</h1>
										<hr />
										<br />
									</div>
									<div>
										<p>Name:</p>
										<p>
											From Date: <b>{fromDate}</b>
										</p>
										<p>
											To Date: <b>{toDate}</b>{" "}
										</p>
										<p>
											Maxcount: <b>{data.maxcount}</b>
										</p>
										<br />
										<hr />
									</div>
									<div>
										<p>
											Total Days: <b>{totalDays}</b>{" "}
										</p>
										<p>
											Rent Per Day: <b>{data.rentperday}</b>
										</p>
										<h1>
											Total Amount: <b>{totalDays * data.rentperday}</b>
										</h1>
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
