import React, { useEffect, useState } from "react";
import Room from "../components/Room";
import { useAxios } from "../hooks/useAxios";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Carousel from "../components/Carousel";

const url = process.env.REACT_APP_BACKEND_URL;

function Home() {
	const { data, isLoading, error } = useAxios(`${url}/rooms`);
	const [rooms, setRooms] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [room, setRoom] = useState([]);

	useEffect(() => {
		let current = true;
		if (current && data) {
			setRooms(data.rooms);
		}
		return () => (current = false);
	}, [data]);

	const handleShow = (room) => {
		setIsOpen(true);
		setRoom(room);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<div className="container">
				<div className="row justify-content-center mt-5">
					{isLoading ? (
						<h1>Loading...</h1>
					) : error ? (
						<h1>Error Fetching Rooms...</h1>
					) : (
						<>
							{rooms.map((room) => (
								<div key={room._id} className="col-md-9">
									<Room {...room} handleShow={handleShow} />
								</div>
							))}
						</>
					)}
				</div>
			</div>
			<Modal centered="true" size="lg" isOpen={isOpen}>
				<ModalHeader toggle={handleClose}>{room.name}</ModalHeader>
				<ModalBody>
					<Carousel room={room} />
					<p>{room.description}</p>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={function noRefCheck() {}}>
						Do Something
					</Button>{" "}
					<Button onClick={handleClose}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</>
	);
}

export default Home;