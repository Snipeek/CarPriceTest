import React from 'react';

import '../styles/index.scss';
import { IndexPage } from "../pages";
import {Provider} from "react-redux";
import { createAppStore } from "../redusers";

const store = createAppStore();

class Root extends React.Component {
	render() {
		return(
			<Provider store={store}>
				<IndexPage />
			</Provider>
		);
	}
}

export default Root;