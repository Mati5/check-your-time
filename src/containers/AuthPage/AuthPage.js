import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom";

import { login, register } from '../../store/Auth/actions';
import SignInForm from '../../components/AuthForm/SignInForm';
import SignUpForm from '../../components/AuthForm/SignUpForm';
import authLayout from '../../hoc/authLayout';

const SignIn = authLayout(SignInForm);
const SignUp = authLayout(SignUpForm);

const AuthPage = ({ loginError, login }) => {
    const location = useLocation();

    return(
        location.pathname === "/signin" ?
            <SignIn onSubmit={login}
                    loginError={loginError} /> :
            <SignUp onSubmit={register} />
            
    );
}

const mapStateToProps = state => ({
    loginError: state.user.error
});

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);