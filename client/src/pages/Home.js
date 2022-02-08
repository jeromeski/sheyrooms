import React, { useEffect, useState } from "react";
import moment from "moment";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import Room from "../components/Room";
import { useAxios } from "../hooks/useAxios";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Carousel from "../components/Carousel";

import "antd/dist/antd.css";

const { RangePicker } = DatePicker;

const url = process.env.REACT_APP_BACKEND_URL;

function Home() {
	const { data, isLoading, error } = useAxios(`${url}/rooms`);
	const [isOpen, setIsOpen] = useState(false);
	const [room, setRoom] = useState([]);
	const [fromDate, setFromDate] = useState();
	const [toDate, setToDate] = useState();

	const navigate = useNavigate();

	const handleShow = (room) => {
		setIsOpen(true);
		setRoom(room);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleRoom = (id) => {
		console.log(id);
		navigate(`/booking/${id}/${fromDate}/${toDate}`);
	};

	const filterByDate = (dates) => {
		setFromDate(moment(dates[0]).format("DD-MM-YYYY"));
		setToDate(moment(dates[1]).format("DD-MM-YYYY"));
	};

	console.log(data);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-10 mt-5">
						<RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
					</div>
				</div>
				<div className="row justify-content-center mt-5">
					{isLoading ? (
						<h1>Loading...</h1>
					) : error ? (
						<h1>Error Fetching Rooms...</h1>
					) : (
						data && (
							<>
								{data.rooms.map((room) => (
									<div key={room._id} className="col-md-9">
										<Room {...room} handleShow={handleShow} handleRoom={handleRoom} />
									</div>
								))}
							</>
						)
					)}
				</div>
			</div>
			<Modal centered size="lg" isOpen={isOpen}>
				<ModalHeader toggle={handleClose}>{room.name}</ModalHeader>
				<ModalBody>
					<Carousel room={room} />
					<p>{room.description}</p>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={() => handleRoom(room._id)}>
						Book Now
					</Button>{" "}
					<Button onClick={handleClose}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</>
	);
}

export default Home;