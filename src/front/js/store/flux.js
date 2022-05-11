const getState = ({ getStore, getActions, setStore }) => {
	let base_url = process.env.BACKEND_URL;
	return {
		store: {
			users: []
		},
		actions: {
			getUsers: () => {
				fetch(`${base_url}/api/users`)
					.then(resp => resp.json())
					.then(data => setStore({ users: data }))
					.catch(error => console.log("Error loading", error));
			}
		}
	};
};

export default getState;
