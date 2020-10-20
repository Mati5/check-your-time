import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SimpleTile from '../../components/SimpleTile/SimpleTile';

const Home = () => {
    let { url } = useRouteMatch();
  
    return(
        <React.Fragment>
            <Container>
                <h2>Home page</h2>
                <Row>
                    <Col md={4}>
                        <SimpleTile link={`${url}/timer`}>
                            Timers
                        </SimpleTile>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    );
}

export default Home;