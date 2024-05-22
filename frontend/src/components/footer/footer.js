import React from "react";
import { RemoveRounded } from "@material-ui/icons";
import { Box, Button, Typography, Grid, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
const footerCSS = makeStyles((theme) => ({
  footer: {
    maxWidth: "345px",
    margin: "auto",
    textAlign: "center",
    padding: "0 0 1vh 0",
  },
  copyright: {
    padding: "0 0 3vh 0",
    margin: "auto",
    textAlign: "center",
  },
  copyrightH6: {
    fontWeight: "400",
    fontSize: "0.9rem",
    letterSpacing: "0.05rem",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
  },
  icon: {
    fontSize: "1.5rem",
    marginRight: theme.spacing(1),
  },
}));

function currentYear() {
  var d = new Date();
  return d.getFullYear();
}

let thisYear = currentYear();

const FooterComponent = () => {
  const classes = footerCSS();
  return (
    <Slide
      in={true}
      direction="up"
       
    >
      <Box component="div" className={classes.footer} color="background">
        <Grid
          container
          justify="center"
          direction="row"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12}>
            <Grid
              container
              justify="center"
              direction="row"
              alignItems="center"
            >
              <div>
                <InstagramIcon className={classes.icon} />
                <FacebookIcon className={classes.icon} />
                <TwitterIcon className={classes.icon} />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Box component="div" className={classes.copyright}>
          <Typography
            variant="h6"
            color="secondary"
            className={classes.copyrightH6}
          >
            &copy; Copyright Bla Blogs {thisYear}
          </Typography>
        </Box>
      </Box>
    </Slide>
  );
};

export default FooterComponent;
