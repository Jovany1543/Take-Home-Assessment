import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Table } from "../components/table.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return <div className="text-center mt-5">{store.users.length > 0 && <Table />}</div>;
};
