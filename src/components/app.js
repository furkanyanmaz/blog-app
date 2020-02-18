import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Container,Row,Col} from "react-bootstrap";

import Navigation from "./Navigation";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Post from "../pages/Post";


function App(){
    return(
        <Router>
            <Navigation />
            <Container>
                <Row className={"mt-5"}>
                    <Col md={8}>
                        <Route path={"/"} exact render={() => <Home />} />
                        <Route path={"/about"} render={() => <About />} />
                        <Route path={"/contact"} render={() => <Contact />} />
                        <Route path={"/post/:slug"} render={() => <Post /> } />
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </Router>
    )
}

export default App;