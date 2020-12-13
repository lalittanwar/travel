import React,{ useState } from 'react';
import { Container,Grid,Grow } from '@material-ui/core';
import Posts from './../Posts/Posts';
import Form from './../Form/Form';

import './Home.css';

function Home () {

    const [ currentId,setCurrentId ] = useState( null );

    return (
        <div>
            <Container maxWidth="md" className="back" >
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
