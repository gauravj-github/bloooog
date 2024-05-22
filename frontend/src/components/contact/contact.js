import React, {useState} from 'react';
import axios from 'axios';
import {Typography, Button, Grid, Box, FormControl, InputLabel, OutlinedInput} from '@material-ui/core';
import {SendRounded} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

const contactCSS = makeStyles((theme) => ({
    contactContainer:{
        position: "relative",
        margin: "auto",
        padding: "10vh 0 10vh 0",
        width: "350px",
        textAlign: "center"
    },
    title:{
        textTransform: "capitalize",
        fontWeight: "400",
        letterSpacing: "2px",
        fontSize: "3rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    textField:{
        padding:"0 0 1vh 0"
    },
}))

const ContactComponent = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleForm = (e) => {
        fetch("http://127.0.0.1:8000/api/contact/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({name: name, email: email, message: message})
             
        })
        .then(response => response.json())
        .then(data => {
            let successMessage = document.querySelector('.success-message');
            successMessage.innerHTML = JSON.stringify("Your message is sent ");
            console.log("success")
        })
        .catch(error => {
            let errorMessage = document.querySelector('.error-message');
            errorMessage.innerHTML = JSON.stringify("could not send the message ");
            console.log("fail")
        });
        console.log(name);
        console.log(email);
        console.log(message);

        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
    }
    const handleName = (event) => {
         setName(  event.target.value );
      }
      const handleEmail = (event) => {
        setEmail(  event.target.value );
     }
     const handleMessage = (event) => {
        setMessage(  event.target.value );
     }
    const classes = contactCSS();
    return (
        <Box component="div" className={classes.contactContainer}>
            <Box component="div" className="contact">
                <Grid container justify="center" direction="column">
                    <Grid item xs={12}>
                        <Typography variant="h1" color="primary" className={classes.title}>Let's Talk</Typography>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <Box component="form" onSubmit={handleForm}>
                            <FormControl required fullWidth variant="outlined" className={classes.textField}>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <OutlinedInput
                                    id="name"
                                    type="name"
                                    onChange={handleName} 
                                    labelWidth={50}
                                    placeholder=" "
                                    size="medium"
                                />
                            </FormControl>
                            <FormControl required fullWidth variant="outlined" className={classes.textField}>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <OutlinedInput
                                    id="email"
                                    type="email"
                                    onChange={handleEmail}  
                                    labelWidth={115}
                                    placeholder=" "
                                    size="medium"
                                />
                            </FormControl>
                            <FormControl required fullWidth variant="outlined" className={classes.textField}>
                                <InputLabel htmlFor="text">Message</InputLabel>
                                <OutlinedInput
                                    id="message"
                                    type="text"
                                    onChange={handleMessage}  
                                    labelWidth={78}
                                    placeholder="I really like your website!" 
                                    multiline 
                                    rows={4}
                                    margin="dense"
                                    size="medium"
                                />
                            </FormControl>
                            <Button type="submit" fullWidth={true} color="secondary" variant="text" endIcon={<SendRounded fontSize="small" color="secondary"/>}>
                                Send
                            </Button>
                            <Box component="div" className="success-message">
                                <label></label>
                            </Box>
                            <Box component="div" className="error-message">
                                <label></label>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
export default ContactComponent