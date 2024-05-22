import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  
  Typography,
  
  Slide,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CSS = makeStyles((theme) => ({
  header: {
    padding: "0 0 15px 0",
  },
  body: {
    width: "100%",
  },
  bodyH5: {
    textTransform: "capitalize",
    fontWeight: "300",
    letterSpacing: "1px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: "1.7rem",
    textAlign: "center",
  },
  bodyH6: {
    textTransform: "capitalize",
    fontWeight: "400",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: "1rem",
    textAlign: "right",
    marginRight: "20px",
  },

  details: {
    paddingLeft: "2%",
    textTransform: "capitalize",
    fontWeight: "400",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: "1rem",
    textAlign: "center",
  },
  comment: {
    position: "relative",
    width: '100%',
     marginLeft: "10%",
    backgroundColor: theme.palette.background.secondary,
  },
  input: {
    color:  "green",
    marginBottom: theme.spacing(2),
   

  },
}));

const BlogDetail = () => {
  const classes = CSS();
  const [Post, setPost] = useState([])
  const {id} = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  console.log(id)
  useEffect(() => {
    getPost()
    getComments()
}, []) 
  let getPost = async () => {

      let response = await fetch( `http://127.0.0.1:8000/api/posts/${id}/`)
      let data = await response.json()
      setPost(data)
  }
  let getComments = async () => {

    let response = await fetch( `http://127.0.0.1:8000/api/posts/${id}/comments/`)
    let data = await response.json()
    console.log(data)
    setComments(data)
}
   
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCommentSubmit = () => {
    fetch(`http://127.0.0.1:8000/api/posts/${id}/comments/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, body: newComment, post:  id }) 
    });
    setComments([...comments, { name: name, body: newComment }]);
    setNewComment('');
    setName('');
}
  return (
    <>
    <div>
      <Box component="div" className={classes.body}>
        <Slide
          in={true}
          timeout={750}
          direction="left"
          style={{ transitionDelay: 250 }}
        >
          {<Card>
            <CardMedia
              style={{
                width: " 60vw",
                height: " 30vw",
                marginLeft: "20%",
                marginRight: "25%",
              }}
              align="center"
              component="img"
              alt="green iguana"
              image={`http://localhost:8000${Post.image}`}
            />
            <CardHeader
              title={
                <Typography
                  variant="h5"
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
              <Typography variant="body1" color="primary" align="justify">
              {Post.body}
              </Typography>
            </CardContent>
            <Grid   xs={6} >
            <div className={classes.comment}>
     <Typography variant='h5' > Comments</Typography>
      <List>
        {comments.map((comment ,index) => (
        <ListItem style={ {border: "1px solid "}} key={index} >
            <ListItemText primary={`  ${comment.name} :- ${comment.body}`} />
          </ListItem>
        ))}
      </List>
      <TextField 
        className={classes.input}
        label="Name"
        fullWidth
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        className={classes.input}
        label="Leave a comment"
        fullWidth
        value={newComment}
        onChange={handleCommentChange}
      />
      <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
        Submit
      </Button>
    </div>
            </Grid>
          </Card>}
        </Slide>
        
         
      </Box>

    </div>
    
    </>
  );
};

export default withRouter(BlogDetail);
