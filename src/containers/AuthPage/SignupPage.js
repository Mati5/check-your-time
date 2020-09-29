import React from 'react';

import { Formik, getIn } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Container from 'react-bootstrap/Container';
import { register } from '../../store/Auth/actions';

const SignupSchema = Yup.object().shape({
    login: Yup.string()
      .required('Login is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('E-mail is required'),
    password: Yup.string()
      .min(6)
      .required('Password is required'),
});

const getStyles = (errors, fieldName) => {
    if (getIn(errors, fieldName)) {
        return {
            border: '2px solid rgb(239, 142, 144)'
        }
    }
}

const SignupPage = () => {

    return(
        <React.Fragment>
            <Container>
                <Formik
                    initialValues={{ login: '', email: '', password: '' }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        register(values);
                    }}>
                    {({ handleSubmit, isSubmitting, handleChange, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <TextField
                                    id="login"
                                    label="Login"
                                    type="text"
                                    name="login"
                                    style={getStyles(errors, 'login')} 
                                    onChange={handleChange} />
                                {errors.login && touched.login ? (
                                    <div>{errors.login}</div>
                                ) : null}
                            </div>
                            <div>
                                <TextField
                                    id="email"
                                    label="Email"
                                    type="text"
                                    name="email"
                                    style={getStyles(errors, 'email')} 
                                    onChange={handleChange} />
                                {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}
                            </div>
                            <div>
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    style={getStyles(errors, 'password')} 
                                    onChange={handleChange} />
                                {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
                                ) : null}
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </Container>
        </React.Fragment>
    );
}

export default SignupPage;