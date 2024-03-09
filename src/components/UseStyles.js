import { makeStyles } from "@material-ui/core/styles";

const lightColor = "#ffffff";
const midColor = "#dc4f4b";
const darkColor = "#2d2b70";
const reactIconColor = "#61dafb";
const nodeIconColor = "#68A063";
const awsIconColor = " #FF9900";
const jsIconColor = "#323330";
const htmlIconColor = "#f06529";
const cssIconColor = "#264de4";
const contentfulIconColor = "#764abc";
const graphQLIconColor = "#e10098";
const dockerIconColor = "#2496ed";
const tsIconColor = "#3178c6";
const nextIconColor = "000000";

const UseStyles = makeStyles((theme) => ({
  darkColor: {
    color: darkColor,
  },
  midColor: {
    color: midColor,
  },
  lightColor: {
    color: lightColor,
  },
  reactIcon: {
    color: reactIconColor,
  },
  nodeIcon: {
    color: nodeIconColor,
  },
  awsIcon: {
    color: awsIconColor,
  },
  jsIcon: {
    color: jsIconColor,
  },
  htmlIcon: {
    color: htmlIconColor,
  },
  cssIcon: {
    color: cssIconColor,
  },
  contentfulIcon: {
    color: contentfulIconColor,
  },
  graphQLIcon: {
    color: graphQLIconColor,
  },
  dockerIcon: {
    color: dockerIconColor,
  },
  tsIcon: {
    color: tsIconColor,
  },
  nextIcon: {
    color: nextIconColor,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    color: darkColor,
  },
  anchorTag: {
    color: darkColor,
    transition: "all 0.3s ease-in-out 0s",
    "&:hover": {
      color: midColor,
      transform: "scale(1.1, 1.1)",
    },
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  heroContent: {
    padding: theme.spacing(15, 0, 6),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    // backgroundImage: `url(https://images.unsplash.com/photo-1489679407847-02d21ceb0e80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundPosition: 'center',
  },
}));

export default UseStyles;
