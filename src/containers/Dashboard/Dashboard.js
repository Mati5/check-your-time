import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
const Timer = React.lazy(() => import('../Timer/Timer'));

export const SingleTimer = () => {
    let { timerId } = useParams();

    return(
        <div>
            <h3>{timerId}</h3>
        </div>
    );
}

const Dahboard = () => {
    let { path, url } = useRouteMatch();

    const routes = (
        <Switch>
            <Route path="/" exact />   
            <Route path={`${path}/timer`} exact component={Timer} />
            <Route path={`${path}/timer/:timerId`} component={SingleTimer} />       
        </Switch>
    );

    return(
        <React.Fragment>
            <Container>
                <h1>Dashboard</h1>

                <Link to={`${url}`}>Home</Link>
                <Link to={`${url}/timer`}>Timer</Link>
                <Link to={`${url}/timer/timer-6`}>Timer 1</Link>
            </Container>
            
            {routes}
        </React.Fragment>
    );
}



export default Dahboard;