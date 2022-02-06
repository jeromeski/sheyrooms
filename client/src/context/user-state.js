import { createContext, useContext, useReducer } from "react";

const Context = createContext();

function UserStateProvider({ reducer, initialState, children }) {
	const value = useReducer(reducer, initialState);
	return <Context.Provider value={value} children={children} />;
}

function useAuthState() {
	return useContext();
}

export { useAuthState };
export default UserStateProvider;
