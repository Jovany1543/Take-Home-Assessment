const getState = ({ getStore, getActions, setStore }) => {
	let base_url = process.env.BACKEND_URL;
	return {
		store: {
			users: []
		},
		actions: {
			createUser: data => {
				fetch(`${base_url}/api/users/create`, {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify(data)
				})
					.then(res => {
						if (res.status === 409)
							throw new Error("The email address already exists. Please enter a different email one.");

						return res.json();
					})
					.then(data => {
						getActions().setAlert({
							type: "success",
							msg: data.msg,
							show: true
						});
						setStore({ users: data.users });
					})
					.catch(err => err);
			},
			getUsers: () => {
				fetch(`${base_url}/api/users`)
					.then(resp => resp.json())
					.then(data => setStore({ users: data }))
					.catch(error => console.log("Error loading", error));
			},
			editUser: payload => {
				fetch(`${base_url}/api/users/${payload.id}/edit`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(payload)
				})
					.then(res => {
						return res.json();
					})
					.then(data => setStore({ users: data }));
			},
			deleteUser: user_id => {
				fetch(`${base_url}/api/users/${user_id}/delete`, {
					method: "DELETE"
				})
					.then(res => {
						return res.json();
					})
					.then(data => setStore({ users: data }))
					.catch(error => console.log("Error loading", error));
			},
			setAlert: payload => {
				/* payload should be an object with the following shape:
			{
				type: "",
				msg: "",
				show: false
			}
			type either: danger, success, warning
		*/
				setStore({ alert: payload });
			},
			resetAlert: () => {
				setStore({
					alert: {
						type: "",
						msg: "",
						show: false
					}
				});
			}
		}
	};
};

export default getState;
