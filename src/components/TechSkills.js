import { Icon, Grid, Header } from "semantic-ui-react";
import Container from "@material-ui/core/Container";
import { TbBrandNextjs } from "react-icons/tb";
import { SiContentful, SiGraphql, SiTypescript } from "react-icons/si";
import UseStyles from "./UseStyles";

function TechSkills() {
  const classes = UseStyles();
  const {
    reactIcon,
    nodeIcon,
    awsIcon,
    jsIcon,
    htmlIcon,
    cssIcon,
    graphQLIcon,
    nextIcon,
    tsIcon,
    contentfulIcon,
  } = classes;

  return (
    <Container>
      <div className="tech-core">Core Technologies</div>
      <div className="tech-container">
        <Grid columns={10} doubling>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <Icon
                    circular
                    className={`${reactIcon} tech-icon`}
                    name="react"
                  />
                </a>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  <Icon circular className={`${nextIcon} tech-icon`}>
                    <TbBrandNextjs />
                  </Icon>
                </a>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    circular
                    className={`${nodeIcon} tech-icon`}
                    name="node"
                  />
                </a>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">
                <a
                  href="https://aws.amazon.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    circular
                    className={`${awsIcon} tech-icon`}
                    name="aws"
                  />
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
                  <Icon circular className={`${tsIcon} tech-icon`}>
                    <SiTypescript />
                  </Icon>
                </a>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">
                <a href="https://graphql.org/" target="_blank" rel="noreferrer">
                  <Icon circular className={`${graphQLIcon} tech-icon`}>
                    <SiGraphql />
                  </Icon>
                </a>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    circular
                    className={`${jsIcon} tech-icon`}
                    name="js square"
                  />
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
                  <Icon circular className={`${contentfulIcon} tech-icon`}>
                    <SiContentful />
                  </Icon>
                </a>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Icon
                    circular
                    className={`${htmlIcon} tech-icon`}
                    name="html5"
                  />
                </a>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Icon
                    circular
                    className={`${cssIcon} tech-icon`}
                    name="css3 alternate"
                  />
                </a>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Container>
  );
}

export default TechSkills;
