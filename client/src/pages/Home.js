import React, { useEffect, useState } from "react";
import { useAxios } from "../hooks/useAxios";

const url = process.env.REACT_APP_BACKEND_URL;

function Home() {
	const [rooms, setRooms] = useState([]);
	const { data, isLoading, error } = useAxios(`${url}/rooms`);

	console.log(error);

	useEffect(() => {
		let current = true;
		if (current && data) {
			setRooms(data.rooms);
		}
		return () => (current = false);
	}, [data]);

	return isLoading ? (
		<h1>Loading...</h1>
	) : (
		<div>
			{data && rooms.map((room) => <pre key={room._id}>{JSON.stringify(room, null, 2)}</pre>)}
		</div>
	);
}

export default Home;
