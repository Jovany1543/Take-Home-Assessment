import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Table = props => {
	return (
		<div className="container">
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col"> id </th> <th scope="col"> First </th> <th scope="col"> Last </th>{" "}
						<th scope="col"> Email </th>
						<th scope="col"> Age </th>
						<th scope="col"> Favorite Color </th>{" "}
					</tr>{" "}
				</thead>{" "}
				<tbody>
					{" "}
					{props.users.length > 0 &&
						props.users.map((user, index) => (
							<tr key={index}>
								<th scope="row">{user.id}</th> <td>{user.first_name} </td> <td>{user.last_name} </td>{" "}
								<td> {user.email.toLowerCase()} </td> <td>{user.age} </td>{" "}
								<td>{user.favorite_color.toLowerCase()}</td>{" "}
							</tr>
						))}{" "}
				</tbody>{" "}
			</table>
		</div>
	);
};

Table.propTypes = {
	users: PropTypes.arrayOf(PropTypes)
};
