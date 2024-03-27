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
import { SiRedux, SiGraphql, SiTypescript, SiNextdotjs } from "react-icons/si";
import { Icon } from "semantic-ui-react";

import ProjectData from "../data/ProjectData";

const renderIcon = (typeOfProject) => {
  const iconMap = {
    React: <Icon size="big" name="react" />,
    AWS: <Icon size="big" name="aws" />,
    GraphQL: (
      <Icon size="big">
        <SiGraphql />
      </Icon>
    ),
    Redux: (
      <Icon size="big">
        <SiRedux />
      </Icon>
    ),
    TypeScript: (
      <Icon size="big">
        <SiTypescript />
      </Icon>
    ),
    Next: (
      <Icon size="big">
        <SiNextdotjs />
      </Icon>
    ),
    JavaScript: <Icon size="big" name="js" />,
  };

  return iconMap[typeOfProject];
};

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
            <Grid
              item
              key={card.id}
              xs={12}
              sm={6}
              md={4}
              style={{ display: "flex" }}
            >
              <Card className="card">
                <CardActionArea href={website} target="_blank">
                  <CardHeader
                    action={renderIcon(typeOfProject)}
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
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default ProjectsCards;
