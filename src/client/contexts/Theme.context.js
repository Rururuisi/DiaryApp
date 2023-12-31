import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const lightTheme = {
	primary: {
		// dark-green, green and light-green
		main: "#145500",
		light: "#dbe098",
		dark: "#8bab57",
	},
	secondary: {
		// yellow, very-light-yellow, adn dark-brown
		main: "#f6c800",
		light: "#fffdf0",
		dark: "#333230",
	},
	ternary: {
		// white, light blue, and light grey
		main: "#fff",
		light: "#89bfb9",
		dark: "#ddd",
	},
};

const darkTheme = {
	primary: {
		// dark-green, green and light-green
		main: "#fff",
		light: "#dbe098",
		dark: "#8bab57",
	},
	secondary: {
		// yellow, very-light-yellow, adn dark-brown
		main: "#f6c800",
		light: "#fffdf0",
		dark: "#333230",
	},
	ternary: {
		// white, light blue, and light grey
		main: "#111",
		light: "#89bfb9",
		dark: "#ddd",
	},
};

const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...(mode === "light" ? lightTheme : darkTheme),
	},
});

const muiTheme = createTheme(getDesignTokens("light"));

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [mode, setMode] = useState("light");
	const [theme, setTheme] = useState(muiTheme);

	useEffect(() => {
		mode && setTheme(createTheme(getDesignTokens(mode)));
	}, [mode]);

	const value = { theme, setTheme, mode, setMode };
	return (
		<ThemeContext.Provider value={value}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeContextProvider };
