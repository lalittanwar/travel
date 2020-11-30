import React,{ useEffect,useState } from 'react';
import { TextField,Paper,Button,Typography } from '@material-ui/core';
import Filebase from 'react-file-base64';
import { useDispatch,useSelector } from 'react-redux';
import { createPost,updatePost } from '../../actions/posts';
import './Form.css';



function Form ( { currentId,setCurrentId } ) {

    const dispatch = useDispatch();
    const post = useSelector( state => currentId ? state.posts.find( ( p ) => p._id === currentId ) : null );
    const [ postData,setPostdata ] = useState( {
        creator: '',title: '',message: '',tags: '',selectedFile: ''
    } );

    useEffect( () => {
        if ( post ) setPostdata( post );
    },[ post ] );

    const handleSubmit = async ( event ) => {
        event.preventDefault();
        if ( currentId ) {
            await dispatch( updatePost( currentId,postData ) );
        } else {
            await dispatch( createPost( postData ) );
        }
        handleClear();
    }

    const handleClear = () => {
        setCurrentId( null );
        setPostdata( { creator: '',title: '',message: '',tags: '',selectedFile: '' } )
    }

    return (
        <div>
            <Paper style={ { position: 'relative' } }>
                <form onSubmit={ handleSubmit } className="form-container">
                    { currentId ? <Typography> Editing </Typography> : <Typography> Creating</Typography> }
                    <TextField label="Creator" name="creator" value={ postData.creator } fullWidth={ true }
                        onChange={ e => setPostdata( { ...postData,creator: e.target.value } ) } />
                    <TextField label="Title " name="title" value={ postData.title } fullWidth={ true }
                        onChange={ e => setPostdata( { ...postData,title: e.target.value } ) } />
                    <TextField label="Message" name="message" value={ postData.message } fullWidth={ true }
                        onChange={ e => setPostdata( { ...postData,message: e.target.value } ) } />
                    <TextField label="Tags" name="tags" value={ postData.tags } fullWidth={ true }
                        onChange={ e => setPostdata( { ...postData,tags: e.target.value.split( ',' ) } ) } />
                    <div style={ { 'marginTop': '15px',width: '100 %' } } >
                        <Filebase type="file" mutiple={ false } onDone={ ( { base64 } ) => { setPostdata( { ...postData,selectedFile: base64 } ) } } />
                    </div>
                    <div className="form-button">
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                        <Button variant="contained" color="secondary" onClick={ handleClear }>Clear</Button>
                    </div>
                </form>
            </Paper>
        </div >
    )
}

export default Form
