import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Room from '../components/Room';
import { useAxios } from "../hooks/useAxios";

const url = process.env.REACT_APP_BACKEND_URL;

function Home() {
	const { data, isLoading, error } = useAxios(`${url}/rooms`);
	const [show, setShow] = useState(false);
	const [rooms, setRooms] = useState([]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		let current = true;
		if (current && data) {
			setRooms(data.rooms);
		}
		return () => (current = false);
	}, [data]);

	return (
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
								<Room {...room} />
							</div>
						))}
					</>
				)}
			</div>
		</div>
	);
}

export default Home;

/*
	<Button variant="primary" onClick={handleShow}>
						Launch demo modal
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Modal heading</Modal.Title>
						</Modal.Header>
						<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleClose}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Modal>	<Button variant="primary" onClick={handleShow}>
						Launch demo modal
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Modal heading</Modal.Title>
						</Modal.Header>
						<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleClose}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Modal>
*/ 