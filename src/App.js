import React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import './utils/interceptors';
import { logout } from './store/Auth/actions';

import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = React.lazy(() => import('./containers/AuthPage/AuthPage'));
// const About = React.lazy(() => import('./containers/About/About')); // Start page for unauth users
const Dashboard = React.lazy(() => import('./containers/Dashboard/Dashboard'));
const NotFoundPage = React.lazy(() => import('./containers/NotFoundPage/NotFountPage'));
const PrivateRoute = React.lazy(() => import('./components/PrivateRoute/PrivateRoute'));
const PublicRoute = React.lazy(() => import('./components/PublicRoute/PublicRoute'));


const App = ({ auth, logout }) => {
  const routes = (
    <Switch>
      <PublicRoute restricted={true} path="/" exact component={LoginPage} />
      <PublicRoute restricted={true} path="/signin" component={LoginPage} />
      <PublicRoute restricted={true} path="/signup" component={LoginPage} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PublicRoute restricted={false} component={NotFoundPage} />
    </Switch>
  );

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        {routes}
      </React.Suspense>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  auth: state.user.auth,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);