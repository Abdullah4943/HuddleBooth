import { createTheme, ThemeOptions } from "@mui/material";

export const themeInterface: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#303030",
    },
 
    secondary: {
      main: "#f9c712",
    },
  },
  shape:{
    borderRadius:9,
  }
});
