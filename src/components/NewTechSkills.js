import { Icon, Grid, Header } from "semantic-ui-react";
import { SiRedux, SiGraphql, SiDocker, SiTypescript } from "react-icons/si";

import Typography from "@material-ui/core/Typography";

//Components
import UseStyles from "./UseStyles";

function NewTechSkills() {
  const classes = UseStyles();
  const { reduxIcon, graphQLIcon, dockerIcon, tsIcon } = classes;

  return (
    <div>
      <div>
        <Typography variant="h5" gutterBottom component="div">
          <span className="font"> New technologies, I am learning </span>
        </Typography>
      </div>
      <div className="tech-container">
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">
                <a href="https://graphql.org/" target="_blank" rel="noreferrer">
                  <Icon circular className={`${graphQLIcon} tech-icon `}>
                    <SiGraphql />
                  </Icon>
                </a>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon circular className={`${tsIcon} tech-icon `}>
                    <SiTypescript />
                  </Icon>
                </a>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">
                <a
                  href="https://redux-toolkit.js.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon circular className={`${reduxIcon} tech-icon `}>
                    <SiRedux />
                  </Icon>
                </a>
              </Header>
            </Grid.Column>
            <Grid.Column>
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

export default NewTechSkills;
