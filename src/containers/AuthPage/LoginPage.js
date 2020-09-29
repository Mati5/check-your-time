import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Container from 'react-bootstrap/Container';
import { login } from '../../store/Auth/actions';

const LoginPage = ({ loginError, login }) => {

    return(
        <React.Fragment>
            <Container>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        //register(values);
                        login(values);
                    }}
                    >
                    {({ handleSubmit, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <TextField
                                    id="email"
                                    label="Email"
                                    type="text"
                                    name="email"
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    onChange={handleChange} />
                            </div>
                            {loginError &&
                                <div>Invalid email or password</div>
                            }
                            <button type="submit">
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    loginError: state.user.error
});

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);