import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

import { Home } from "./views/home";
import { Edit } from "./views/edit";
import { AddNew } from "./views/addNew";
import injectContext from "./store/appContext";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/addNew">
							<AddNew />
						</Route>
						<Route exact path="/edit/:index">
							<Edit />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
