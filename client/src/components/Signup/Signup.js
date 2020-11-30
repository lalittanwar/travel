import React,{ Component } from 'react';
import { TextField,Paper,Button,Typography,Container } from '@material-ui/core';

export class Signup extends Component {

    handleSubmit = () => {

    }
    render () {
        return (
            <div>
                <Container maxWidth="xs" >
                    <Paper >
                        <form onSubmit={ this.handleSubmit } className="form-container">
                            <Typography> SignUp </Typography>
                            <TextField label="UserName" name="userName" fullWidth={ true } />
                            <TextField label="Password" name="password" fullWidth={ true } />
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

export default Signup
