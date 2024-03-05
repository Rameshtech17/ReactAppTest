import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    HeaderContainer:{
        display: "flex",
        flexWrap: "wrap",
        // width:"50%",
        color:'blueviolet', 
        backgroundColor: '#cdf2fa',
        borderRadius: '2%',
        width: '50%',
        '@media (min-width: 1000px)': {
          width: '80%'
        },
        '@media (min-width: 800px)': {
            width: '100%'
          }
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
      textAlign: "left"
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    },
    "table-content": {
      width: "100%"
    },
    responsiveFont: {
      [theme.breakpoints.up("md")]: {
        fontSize: "0.7rem !important"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "0.8rem !important"
      }
    },
    row: {
      // background: 'red'
    },
    circle: {
      color: "white",
      fontSize: "1rem",
      borderRadius: "50%",
      width: 50,
      height: 50,
      padding: 6,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none"
    },
    col0: {
      width: 70,
      // minWidth: 50
    },
    col1: {
      width: "55%",
      // minWidth: 200
    },
    col2: {
      width: "15%",
      minWidth: 50
    },
    col3: {
      width: "15%",
      minWidth: 60
    },
    timetext: {
      color: "#545955 !important",
      textAlign: "center"
    }
  }));
  const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });
export default useStyles;
