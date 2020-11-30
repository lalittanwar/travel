import React,{ useState } from 'react';
import { AppBar,Container,Grid,Grow,Typography } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import './index.css';


const App = () => {

    const [ currentId,setCurrentId ] = useState( null );

    return (
        <React.Fragment >
            <Container maxWidth="md" className="back">
                <AppBar position="absolute" style={ { backgroundColor: '#4B1788' } }>
                    {/*    <Button color="disable" >
                        <BusinessCenterIcon />
                    </Button> */}
                    <Typography variant="h4" className="main-title" >Gayatri Graphics</Typography>
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
        </React.Fragment >
    )
}

export default App;
