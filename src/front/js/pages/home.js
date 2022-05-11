import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Table } from "../component/table.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.users);
	return (
		<div className="text-center mt-5">
			<Table users={store.users} />
		</div>
	);
};
