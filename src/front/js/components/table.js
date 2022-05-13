import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Table = props => {
	const [userData, setUserData] = useState(props.users);
	const [order, setOrder] = useState("ASC");
	const sortBy = col => {
		if (order === "ASC") {
			const sorted = [...userData].sort((a, b) => (a[col] > b[col] ? 1 : -1));
			setUserData(sorted);
			setOrder("DSC");
		} else {
			const sorted = [...userData].sort((a, b) => (a[col] < b[col] ? 1 : -1));
			setUserData(sorted);
			setOrder("ASC");
		}
	};

	const headers = [
		{ key: "id", label: "ID" },
		{ key: "first_name", label: "First name" },
		{ key: "last_name", label: "Last name" },
		{ key: "email", label: "Email" },
		{ key: "age", label: "Age" },
		{ key: "favorite_color", label: "Favorite Color" }
	];
	// onClick={() => sortBy(row.key)}
	return (
		<div className="container">
			<table className="table table-hover">
				<thead>
					<tr>
						<th />
						{headers.map(row => (
							<th
								key={row.key}
								scope="col"
								onClick={() => {
									sortBy(row.key);
								}}>
								{" "}
								{row.label}
							</th>
						))}{" "}
					</tr>{" "}
				</thead>{" "}
				<tbody>
					{" "}
					{userData.length > 0 &&
						userData.map((user, index) => (
							<tr key={index}>
								<td>
									<Link to={"/edit/" + user.id}>
										<i className="fas fa-user-edit" />
									</Link>
									{" / "}
									<Link>
										<i
											className="fas fa-trash-alt"
											onClick={() => {
												setUserData(userData.filter((item, i) => index != i));
											}}
										/>
									</Link>
								</td>
								<th scope="row">{user.id}</th> <td>{user.first_name} </td> <td>{user.last_name} </td>{" "}
								<td> {user.email.toLowerCase()} </td> <td>{user.age} </td>{" "}
								<td>{user.favorite_color.toLowerCase()}</td>{" "}
							</tr>
						))}{" "}
					<div>
						<i className="fas fa-plus" />
					</div>
				</tbody>{" "}
			</table>
		</div>
	);
};

Table.propTypes = {
	users: PropTypes.arrayOf(PropTypes)
};
