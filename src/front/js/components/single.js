import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	

	return (
		<div className="">
			<div className="container w-50">
				<form>
					<div className="mb-3">
						<label className="form-label">ID</label>
						<input type="text" className="form-control" readOnly />
					</div>
					<div className="mb-3">
						<label className="form-label">First Name</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Last Name</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Age</label>
						<input type="number" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Favorite Color</label>
						<input type="text" className="form-control" />
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
