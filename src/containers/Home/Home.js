import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';


const Home  = () => {
    
    return(
        <React.Fragment>
            <Container>
                <h1>Home page</h1>
                <p>You don't have account. <Link to="/signup">Sign up</Link></p>
                <p><Link to="/signin">Login</Link></p>
            </Container>
        </React.Fragment>
    )
}

export default Home;