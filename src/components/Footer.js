import Typography from "@material-ui/core/Typography";
import { Icon } from "semantic-ui-react";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import "animate.css";

import UseStyles from "./UseStyles";
import Today from "./Today";

function Footer() {
  const classes = UseStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="center" component="p" gutterBottom>
        <Icon name="mail alternate" fitted />{" "}
        <span className="font">
          Email: <a href="mailto:sidchopp@gmail.com">sidchopp@gmail.com</a>
        </span>
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        <Icon name="map marker alternate" fitted />{" "}
        <span className="font">Calgary-AB </span>
        <span className="leaf">
          <FaCanadianMapleLeaf />
        </span>
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        <span className="font">
          {" © "}2021 - {new Date().getFullYear()},
          <span className="font-link"> My Projects</span>
        </span>
      </Typography>
      <Typography variant="body2" align="center" component="div">
        <Today />
      </Typography>
    </footer>
  );
}

export default Footer;
