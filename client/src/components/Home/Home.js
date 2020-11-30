import React,{ useState } from 'react';
import { AppBar,Button,Container,Grid,Grow,Typography,Toolbar } from '@material-ui/core';
import Posts from './../Posts/Posts'
import Form from './../Form/Form';
// import '../../index.css';
import './Home.css';
import { Link } from 'react-router-dom';


function Home () {

    const [ currentId,setCurrentId ] = useState( null );

    return (
        <div>
            <Container maxWidth="md" className="back">
                <AppBar className="app-bar">
                    <Toolbar>
                        <Typography variant="h6" style={ { flexGrow: 1 } }>Gayatri Graphics</Typography>
                        <Link to='/login' style={ { textDecoration: 'none',color: 'white' } }>
                            <Button color="inherit">Login</Button>
                        </Link>
                        <Link to='/signUp' style={ { textDecoration: 'none',color: 'white' } }>
                            <Button color="inherit">SignUp</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Grow in>
                    <Container position="relative" style={ { 'marginTop': '50px' } } >
                        <Grid container direction="row" justify="space-between" spacing={ 2 } >
                            <Grid item xs={ 12 } sm={ 7 } ><Posts setCurrentId={ setCurrentId } /></Grid>
                            <Grid item xs={ 12 } sm={ 4 } ><Form currentId={ currentId } setCurrentId={ setCurrentId } /></Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default Home
