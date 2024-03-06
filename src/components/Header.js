// Not using Header at the moment...
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h4" color="inherit" noWrap>
          <span className="font-link"> My Projects</span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
