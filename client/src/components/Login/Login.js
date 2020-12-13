import React,{ Component } from 'react';
import { TextField,Paper,Button,Typography,Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { login } from '../../actions/login';
import * as api from '../../api';
import { getUser } from '../../actions/users';


export class Login extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            userName: '',
            password: '',
            error: ''
        }
    }

    handleSubmit = ( event ) => {
        event.preventDefault();
        let user = { userName: this.state.userName,password: this.state.password };
        api.getUser( user )
            .then( () => {
                this.props.dispatch( getUser( user ) );
                this.props.dispatch( login() );
                this.props.history.push( '/' );
                console.log( this.state );
            } )
            .catch( ( error ) => {
                this.setState( { error: error.response.data } )
                console.log( error.response.data );
            } )
    }

    render () {
        return (
            <div>
                <Container maxWidth="xs" style={ { paddingTop: '50px' } }>
                    <Paper >
                        <form onSubmit={ this.handleSubmit } className="form-container">
                            <Typography> Login </Typography>
                            <TextField label="UserName" name="userName" fullWidth={ true } onChange={ e => this.setState( { userName: e.target.value } ) } />
                            <TextField label="Password" name="password" fullWidth={ true } onChange={ e => this.setState( { password: e.target.value } ) } />
                            <div className="form-button">
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                                <Button variant="contained" color="secondary" >Clear</Button>
                            </div>
                        </form>
                    </Paper>
                    <br />
                    { this.state.error ?
                        <Paper style={ { textAlign: 'center',color: '#7C1010',fontWeight: 'bolder',backgroundColor: '#F5A8A8' } }>{
                            this.state.error }</Paper> : null }
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}


export default connect( mapDispatchToProps )( Login )
