import {
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { SiRedux, SiGraphql, SiTypescript } from "react-icons/si";
import { Icon } from "semantic-ui-react";

import ProjectData from "../data/ProjectData";

function ProjectsCards() {
  return (
    <Container className="myProjects-header" maxWidth="lg">
      <div className="font-projects">
        My <span className="highlight-font">Projects</span>
      </div>
      <Grid style={{ marginTop: "10px" }} container spacing={4}>
        {ProjectData.map((card) => {
          const {
            title,
            duties,
            techUsed,
            website,
            img,
            bestView,
            typeOfProject,
          } = card;
          return (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <div className="card">
                <Card>
                  <CardActionArea href={website} target="_blank">
                    <CardHeader
                      action={
                        typeOfProject === "React" ? (
                          <Icon size="big" name="react" />
                        ) : typeOfProject === "AWS" ? (
                          <Icon size="big" name="aws" />
                        ) : typeOfProject === "GraphQL" ? (
                          <Icon size="big">
                            <SiGraphql />
                          </Icon>
                        ) : typeOfProject === "Redux" ? (
                          <Icon size="big">
                            <SiRedux />
                          </Icon>
                        ) : typeOfProject === "TypeScript" ? (
                          <Icon size="big">
                            <SiTypescript />
                          </Icon>
                        ) : (
                          <Icon size="big" name="js" />
                        )
                      }
                      title={
                        <Typography component="span">
                          <span className="card-header highlight-font">
                            {title}
                          </span>
                        </Typography>
                      }
                      subheader={techUsed}
                    />
                    <CardMedia className="card-media" image={img} alt={title} />
                    <CardContent className="card-content">
                      <Typography>
                        <span className="font">{duties}</span>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <div
                        className="card-content-extra"
                        style={{ margin: "3px" }}
                      >
                        <h4 className="font"> Best View: </h4>
                        {bestView}
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default ProjectsCards;
