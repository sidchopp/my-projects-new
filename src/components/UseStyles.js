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
const mongodbColor = "#00684A";

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
  mongodbIcon: {
    color: mongodbColor,
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
    padding: theme.spacing(8, 0),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(6),
  },
}));

export default UseStyles;
