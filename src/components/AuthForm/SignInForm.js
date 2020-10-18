import React from 'react';
import { Link } from "react-router-dom";
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { AuthForm } from './style';

const SignInForm = (props) => {
    const { onSubmit, loginError } = props;

    return(
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
                onSubmit(values);
            }}
            >
            {({ handleSubmit, handleChange }) => (
                <AuthForm onSubmit={handleSubmit}>
                    <AuthForm.Title>Sign in</AuthForm.Title>
                    <AuthForm.Row>
                        <TextField
                            id="email"
                            label="Email"
                            type="text"
                            name="email"
                            fullWidth={true}
                            onChange={handleChange} />
                    </AuthForm.Row>
                    <AuthForm.Row>
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            fullWidth={true}
                            onChange={handleChange} />
                    </AuthForm.Row>
                    {loginError &&
                        <AuthForm.ErrorText>Invalid email or password</AuthForm.ErrorText>
                    }
                    <AuthForm.Buttons>
                        <Button type="submit" variant="contained" color="primary" fullWidth>Sign in</Button>
                    </AuthForm.Buttons>
                    <div className="text-center">You don't have account? <Link to="/signup">Sign up</Link></div> 
                </AuthForm>
            )}
        </Formik>
    )
}

export default SignInForm;