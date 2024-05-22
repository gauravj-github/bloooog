import { Grid, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FullscreenExit } from '@material-ui/icons';


const  CSS = makeStyles((theme) => ({
 parent:{
    display: "Flex" ,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center" ,
    margin: "10%"
  },
}));

const AboutPage = () => {
  const classes =  CSS();

  return (
    <div className={classes.parent}>
    <Grid  spacing={3}>
      <Grid item  xs={12}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, 
          magna a faucibus tincidunt, velit risus viverra velit, vel aliquet 
          velit velit non nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, 
          magna a faucibus tincidunt, velit risus viverra velit, vel aliquet 
          velit velit non nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, 
          magna a faucibus tincidunt, velit risus viverra velit, vel aliquet 
          velit velit non nisl.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          Aliquam auctor, velit vel congue blandit, velit velit rutrum massa, 
          non congue velit velit id risus. Curabitur id volutpat velit. 
          Sed eget ipsum velit. Curabitur id volutpat velit.
          Aliquam auctor, velit vel congue blandit, velit velit rutrum massa, 
          non congue velit velit id risus. Curabitur id volutpat velit. 
          Sed eget ipsum velit. Curabitur id volutpat velit.
        </Typography>
      </Grid>
    </Grid>
    </div>
  );
};

export default AboutPage;
