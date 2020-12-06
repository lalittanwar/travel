import React,{ Component } from 'react';
import { TextField,Paper,Button,Typography,Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { createUser } from '../../actions/users';

export class Signup extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            users: {
                userName: '',
                password: ''
            }
        }
    }

    handleSubmit = ( event ) => {
        event.preventDefault();
        this.props.dispatch( createUser( this.state.users ) )
        console.log( this.state )
    }

    render () {
        return (
            <div>
                <Container maxWidth="xs" style={ { paddingTop: '50px' } }>
                    <Paper >
                        <form onSubmit={ this.handleSubmit } className="form-container">
                            <Typography> SignUp </Typography>
                            <TextField label="UserName" name="userName" fullWidth={ true } onChange={ e => this.setState( { users: { ...this.state.users,userName: e.target.value } } ) } />
                            <TextField label="Password" name="password" fullWidth={ true } onChange={ e => this.setState( { users: { ...this.state.users,password: e.target.value } } ) } />
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
const mapStateToProps = state => {
    return { users: state.users }
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}


export default connect( mapStateToProps,mapDispatchToProps )( Signup )
