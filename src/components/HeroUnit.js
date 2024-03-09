import React from "react";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../App.css";

import ResumeModal from "./ResumeModal";
import TechSkills from "./TechSkills";
import UseStyles from "./UseStyles";
import Certifications from "./Certifications";

function HeroUnit() {
  const classes = UseStyles();
  return (
    <div className={classes.heroContent}>
      <h1 className="font-name">
        Siddharth <span>Chopra</span>
      </h1>
      <h2 className="font-profile ">Software Developer</h2>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <div>
              <IconButton
                href="https://github.com/sidchopp"
                target="_blank"
                size="large"
              >
                <GitHubIcon className="icon" fontSize="large" />
              </IconButton>
            </div>
          </Grid>
          <Grid item>
            <div>
              <Certifications />
            </div>
          </Grid>
          <Grid item>
            <div>
              <IconButton
                variant="contained"
                color="primary"
                href="https://www.linkedin.com/in/sidchopp/"
                target="_blank"
                size="large"
              >
                <LinkedInIcon className="icon" fontSize="large" />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={6} justifyContent="center">
          <Grid item>
            <div>
              <ResumeModal />
            </div>
          </Grid>
        </Grid>
      </div>
      <Typography variant="h4" align="center" gutterBottom>
        {/* <TechSkills /> */}
        {/* <NewTechSkills /> */}
        {/* <DownArrow /> */}
      </Typography>
    </div>
  );
}

export default HeroUnit;
