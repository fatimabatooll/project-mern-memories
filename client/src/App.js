import React, {useEffect} from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@mui/material';
import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles'; 
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'


const App = () => {
  const classes = useStyles(); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'> {/* Apply the 'appBar' class */}
        <Typography className={classes.heading} variant='h2' align='center'>Memories  </Typography>
        <img src={memories} alt="memories" height="60"/>      
      </AppBar>
      <Grow in>
          <Container>
            <Grid  container justify="space-between" alignItems="stretch" spacing={3}> {/* Fix the 'alighnItems' to 'alignItems' */}
               <Grid item xs={12} sm={7}>
                 <Posts/>
               </Grid>
               <Grid item xs={12} sm={4}>
                  <Form/>
               </Grid>
            </Grid>
          </Container>
        </Grow>
    </Container>
  )
}

export default App;

// import React from 'react';
// import Button from '@mui/material/Button';
// import useStyles from './styles';

// const App = () => {
//   const classes = useStyles();

//   return (
//     <Button className={classes.button} variant="contained" color="primary">
//       Hello
//     </Button>
//   );
// };

// export default App;
