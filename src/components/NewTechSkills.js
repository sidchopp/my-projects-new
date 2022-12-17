import { Icon, Grid, Header } from "semantic-ui-react";
import { SiContentful, SiGraphql, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
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
            <Grid.Column>
              <Header as="h1">
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  <Icon circular className={`${nextIcon} tech-icon `}>
                    <TbBrandNextjs />
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
                  href="https://www.contentful.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon circular className={`${reduxIcon} tech-icon `}>
                    <SiContentful />
                  </Icon>
                </a>
              </Header>
            </Grid.Column>
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
