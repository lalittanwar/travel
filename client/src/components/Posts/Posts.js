import React,{ useEffect } from 'react';
import Post from './Post/Post';
import { useSelector,useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { CircularProgress,Grid } from '@material-ui/core';


function Posts ( { currentId,setCurrentId } ) {
    const dispatch = useDispatch();
    const posts = useSelector( state => state.posts );

    useEffect( () => {
        dispatch( getPosts() );
    },[ dispatch,currentId ] )
    console.log( 'posts',posts );

    return (
        !posts.length ? <CircularProgress /> :
            <Grid container direction="row" spacing={ 4 } alignItems="stretch">
                { posts.map( ( post ) => (
                    <Grid key={ post._id } item xs={ 12 } sm={ 6 }>
                        < Post setCurrentId={ setCurrentId } post={ post } />
                    </Grid> ) ) }
            </Grid>
    )
}

export default Posts
