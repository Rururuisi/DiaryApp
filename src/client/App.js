import "./styles/app.css";
import React from "react";
import { ThemeContextProvider } from "./contexts/Theme.context";
import { UserContextProvider } from "./contexts/UserContextProvider";
import Entrance from "./Entrance";

export default function App() {
	return (
		<ThemeContextProvider>
			<UserContextProvider>
				<Entrance />
			</UserContextProvider>
		</ThemeContextProvider>
	);
}
