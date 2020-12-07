import React,{ Component } from 'react';
import { TextField,Paper,Button,Typography,Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { getUser } from '../../actions/users';

export class Login extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            userName: '',
            password: ''
        }
    }

    handleSubmit = ( event ) => {
        event.preventDefault();
        let user = { userName: this.state.userName,password: this.state.password }
        this.props.dispatch( getUser( user ) )
        console.log( this.state )
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
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}


export default connect( mapDispatchToProps )( Login )
