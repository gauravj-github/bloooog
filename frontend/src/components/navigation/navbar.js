import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Grid,
  Slide,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {Avatar} from "@material-ui/core";
const navbarCSS = makeStyles((theme) => ({
  bar: {
    position: "sticky",
    width: "100%",
    height: "65px",
    margin: "0",
  },
  grid: {
    width: "100%",
    margin: "auto",
  },
  button: {
    width: "100%",
    height: "55px",
    margin: "auto",
  },
  buttonText: {
    fontSize: "1.2rem",
    fontWeight: "400",
    textTransform: "capitalize",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    verticalAlign: "middle",
    lineHeight: "55px",
    textAlign: "center",
  },
}));

const mainNavbar = () => {
  const classes = navbarCSS();
  return (
    <Slide
      in={true}
      direction="down"
      timeout={750}
      style={{ transitionDelay: 250 }}
    >
      <AppBar className={classes.bar} color="primary">
        <Toolbar disableGutters={true}>
          <Grid item xs={3} lg={2}>
            <Button
              component={Link}
              to="/about"
              color="primary"
              variant="text"
              className={classes.button}
            >
             <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVs3wvGtppYGSRG2c3610nCvC_NBnAjmSa7zYdTAofA&s" />

            </Button>
          </Grid>
          <Grid container direction="row"  justify="center" alignItems="flex-end">
            <Grid item xs={3} lg={2}>
              <Button
                component={Link}
                to="/"
                color="primary"
                variant="text"
                className={classes.button}
              >
                <Typography variant="h5" className={classes.buttonText}>
                  Home
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={3} lg={2}>
            <Button
              component={Link}
              to="/about"
              color="primary"
              variant="text"
              className={classes.button}
            >
                <Typography variant="h5" className={classes.buttonText}>
                  About
                </Typography>
              </Button>
            </Grid>

            <Grid item xs={3} lg={2}>
              <Button
                component={Link}
                to="/contact"
                color="primary"
                variant="text"
                className={classes.button}
              >
                <Typography variant="h5" className={classes.buttonText}>
                  Contact
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default mainNavbar;
