import React from "react";
import "./style.css";
import { createStyles, makeStyles, createMuiTheme} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./newlogo.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      boxShadow: "#0000",
    
    },
    menuButton: {
      marginRight: theme.spacing(2),
      marginLeft: "50px"
      
    },
    title: {
      flexGrow: 1,
      textAlign: "center"
    },
    logo: {
      maxWidth: "500px",
      maxHeight: "50px",
      marginRight: "10px",
    
    }
  }) 
);

const theme = createMuiTheme({
    palette: {
      primary: {
       main: "#fffff"
      },
      secondary: {
        main: "#09F920",
      },
    },
  });

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         <img src={logo} alt="Night Owl Logo" className={classes.logo}/>
         <IconButton
            edge="start"
            className={classes.menuButton}
            color= {theme.secondary}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
