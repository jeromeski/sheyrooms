import { useEffect, useReducer } from "react";
import userStateReducer, { initialState } from "../context/userReducer";
import { onAuthStateChanged } from "../utils";

export function useAuth() {
	const [{ auth }, dispatch] = useReducer(userStateReducer, initialState);

	useEffect(() => {
		onAuthStateChanged((auth) => {
			dispatch({
				type: "CREATE_USER_REQUEST",
				auth
			});
		});
		return;
	}, []);

	return { auth };
}
