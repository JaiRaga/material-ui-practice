import { createMuiTheme } from "@material-ui/core";
import { purple, yellow, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: purple
  },
  status: {
    danger: "red"
  }
});

export default theme;
