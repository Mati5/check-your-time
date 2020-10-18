import React from 'react';
import { Link } from "react-router-dom";
import { Formik, getIn } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { AuthForm } from './style';

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
            borderBottom: '2px solid rgb(239, 142, 144)'
        }
    }
}

const SignUpForm = (props) => {
    const { onSubmit } = props;

    return (
        <Formik
            initialValues={{ login: '', email: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                onSubmit(values);
            }}>
            {({ handleSubmit, handleChange, errors, touched }) => (
                <AuthForm onSubmit={handleSubmit}>
                    <AuthForm.Title>Sign up</AuthForm.Title>
                    <AuthForm.Row>
                        <TextField
                            id="login"
                            label="Login"
                            type="text"
                            name="login"
                            fullWidth={true}
                            style={getStyles(errors, 'login')} 
                            onChange={handleChange} />
                        {errors.login && touched.login ? (
                            <AuthForm.ErrorText>{errors.login}</AuthForm.ErrorText>
                        ) : null}
                    </AuthForm.Row>
                    <AuthForm.Row>
                        <TextField
                            id="email"
                            label="Email"
                            type="text"
                            name="email"
                            fullWidth={true}
                            style={getStyles(errors, 'email')} 
                            onChange={handleChange} />
                        {errors.email && touched.email ? (
                            <AuthForm.ErrorText>{errors.email}</AuthForm.ErrorText>
                        ) : null}
                    </AuthForm.Row>
                    <AuthForm.Row>
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            fullWidth={true}
                            style={getStyles(errors, 'password')} 
                            onChange={handleChange} />
                        {errors.password && touched.password ? (
                            <AuthForm.ErrorText>{errors.password}</AuthForm.ErrorText>
                        ) : null}
                    </AuthForm.Row>
                    <AuthForm.Buttons>
                        <Button type="submit" variant="contained" color="primary" fullWidth>Sign up</Button>
                    </AuthForm.Buttons>
                    <div className="text-center">You have account? <Link to="/signin">Sign in</Link></div> 
                </AuthForm>
            )}
        </Formik>
    )
}

export default SignUpForm;