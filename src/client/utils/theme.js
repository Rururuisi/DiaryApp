import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
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
  },
});

export { theme };
