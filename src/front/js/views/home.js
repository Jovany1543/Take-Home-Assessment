import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Table } from "../components/table.js";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<Table />
		</div>
	);
};
