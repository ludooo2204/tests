import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = { info: [] };
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_INFO":
			return { ...state, info: [...state.info, action.payload] };
		case "DELETE_INFO":
			return { ...state, info: state.info.filter((item) => item !== action.payload) };
		case "RESET_ALL_INFO":
			return { info: [] };
		default:
			return state;
	}
};
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
