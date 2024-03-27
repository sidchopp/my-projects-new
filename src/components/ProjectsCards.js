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

import ProjectData from "../data/ProjectData";

function ProjectsCards() {
  return (
    <Container className="myProjects-header" maxWidth="lg">
      <div className="font-projects">
        My <span className="highlight-font">Projects</span>
      </div>
      <Grid style={{ marginTop: "10px" }} container spacing={4}>
        {ProjectData.map((card) => {
          const { title, description, techUsed, website, img } = card;
          return (
            <Grid
              item
              key={card.id}
              xs={12}
              sm={6}
              md={4}
              style={{ display: "flex" }}
            >
              <Card variant="outlined" className="card">
                <CardActionArea href={website} target="_blank">
                  <CardHeader
                    title={
                      <Typography component="span">
                        <span className="card-header highlight-font">
                          {title}
                        </span>
                      </Typography>
                    }
                  />
                  <CardMedia className="card-media" image={img} alt={title} />
                  <CardContent className="card-content">
                    <Typography>
                      <span className="font">{description}</span>
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <div className="card-content-extra">
                      <h4 className="font">Tech Used: {techUsed}</h4>
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
