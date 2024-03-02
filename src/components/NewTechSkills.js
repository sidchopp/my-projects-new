import { Icon, Grid, Header } from "semantic-ui-react";
import { SiContentful, SiGraphql, SiTypescript } from "react-icons/si";

import Typography from "@material-ui/core/Typography";

//Components
import UseStyles from "./UseStyles";

function NewTechSkills() {
  const classes = UseStyles();
  const { reduxIcon, graphQLIcon, nextIcon, tsIcon } = classes;

  return (
    <div>
      <div>
        <Typography variant="h5" gutterBottom component="div">
          <span className="font">
            <span className="highlight-font">New </span>
            technologies, I am learning{" "}
          </span>
        </Typography>
      </div>
      <div className="tech-container">
        <Grid columns={4} doubling>
          <Grid.Row>


            {/* <Grid.Column>
              <Header as="h1">
                <a
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon circular className={`${dockerIcon} tech-icon `}>
                    <SiDocker />
                  </Icon>
                </a>
              </Header>
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

export default NewTechSkills;
