import React   from "react";
import { Box, Grid, Typography, Hidden, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import BlogCard from "./card/card";
import { useState, useEffect } from "react";
// import {ExpandMore, CodeRounded, DeveloperModeRounded, DataUsageOutlined} from '@material-ui/icons';
import {   Card,CardMedia, CardHeader, CardContent,   CardActions,   Slide} from '@material-ui/core';
import { Link } from "react-router-dom";
// import clsx from 'clsx';
import { useHistory } from "react-router-dom";

const journeyCSS = makeStyles((theme) => ({
  experienceContainer: {
    width: "100%",
    margin: "3% auto 2% auto",
  },
  header: {
    padding: "0 0 15px 0",
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "400",
    letterSpacing: "2px",
    fontSize: "3rem",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  expCardContainer: {
    maxWidth: "500px",
    margin: "auto",
    overflow: "hidden",
  },
  body: {
    width: "100%",
  },
  bodyH5:{
    textTransform: "capitalize",
    fontWeight: "300",
    letterSpacing: "1px",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: "1.7rem",
    textAlign: "center",
    textDecoration: "none",
boxShadow: "none"
},
bodyH6:{
  textTransform: "capitalize",
  fontWeight: "400",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  fontSize: "1rem",
  textAlign: "right",
  marginRight: "20px"
},
details:{
  paddingLeft: '2%',        
  textTransform: "capitalize",
  fontWeight: "400",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  fontSize: "1rem",
  textAlign: "center",
  textDecoration: "none",
boxShadow: "none"
},

}));


export default function BlogComponent(){
  const classes = journeyCSS();
   
  let [Posts, setPosts] = useState([])
  
  
  useEffect(() => {
    getPosts()
}, []) 

  let getPosts = async () => {
      let response = await fetch('http://127.0.0.1:8000/api/posts/')
      let data = await response.json()
      setPosts(data)
      console.log(data)
  }
  // const history = useHistory();

  // function handleCardClick(id) {
  //   history.push(`/BlogDetail/${id}`);
  // }
  return (
    <>
    <Box component="div" className={classes.experienceContainer}>
      <Box component="div" className={classes.header}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Fade in={true} timeout={500} style={{ transitionDelay: 100 }}>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                color="primary"
                className={classes.title} 
              >
                Blogs
              </Typography>
            </Grid>
          </Fade>
        </Grid>
      </Box>
      <Box component="div" className={classes.body}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          {Posts.map((Post, key) => (
            <Grid item lg={6}>
              <Box m={4} component="div">
                <Box component="div">
                  <Box component="div" className={classes.body}>
                    <Slide
                      in={true}
                      timeout={750}
                      direction="left"
                      style={{ transitionDelay: 250 }}
                    >
                      <Card key={Post.id}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="214"
                        image={`http://localhost:8000${Post.image}`}
                        />
                        <CardHeader
                          title={
                            <Typography
                              variant="h5"
                              component={Link}
                              to={`/BlogDetail/${Post.id}`}
                              underline="none"
                              className={classes.bodyH5}
                              color="primary"    
                            >
                              {Post.title}
                            </Typography>
                          }
                          align="center"
                          subheader={
                            <Typography
                              variant="h6"
                              className={classes.bodyH6}
                              color="secondary"
                            >
                              {Post.published_on}
                            </Typography>
                          }
                        />
                        <CardContent>
                          <Typography
                            variant="body1"
                            color="primary"
                            align="justify"
                          >
                            {Post.short_description}{" "}
                          </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                          <Typography
                            variant="h6"
                            color="secondary"
                            component={Link}
                            to={`/BlogDetail/${Post.id}`}
                            className={classes.details}     
                          >
                            Details
                          </Typography>
                        </CardActions>
                      </Card>
                    </Slide>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    </>
  )
};
