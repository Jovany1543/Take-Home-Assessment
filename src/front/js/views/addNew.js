import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const AddNew = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
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
