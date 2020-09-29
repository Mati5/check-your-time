import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './utils/interceptors';
import { logout } from './store/Auth/actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import TopBar from './components/Navigations/TopBar/index';

const SignupPage = React.lazy(() => import('./containers/AuthPage/SignupPage'));
const LoginPage = React.lazy(() => import('./containers/AuthPage/LoginPage'));
const Home = React.lazy(() => import('./containers/Home/Home'));
const Dashboard = React.lazy(() => import('./containers/Dashboard/Dashboard'));
const NotFoundPage = React.lazy(() => import('./containers/NotFoundPage/NotFountPage'));
const PrivateRoute = React.lazy(() => import('./components/PrivateRoute/index'));
const PublicRoute = React.lazy(() => import('./components/PublicRoute/index'));


const App = ({ auth, logout }) => {
  const routes = (
    <Switch>
      <PublicRoute restricted={true} path="/" exact component={Home} />
      <PublicRoute restricted={true} path="/signup" component={SignupPage} />
      <PublicRoute restricted={true} path="/signin" component={LoginPage} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PublicRoute restricted={false} component={NotFoundPage} />
    </Switch>
  );

  return (
    <React.Fragment>
      <TopBar>
        <Container>
          <Link to={'/'}>Check your time</Link>
          {auth && <button type="button" onClick={() => logout()}>Logout</button>}
        </Container>
      </TopBar>
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