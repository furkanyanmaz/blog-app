import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function Navigation(){
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="ml-auto">
                <Link className="nav-link" to={"/"}>Home</Link>
                <Link className="nav-link" to={"/about"}>About</Link>
                <Link className="nav-link" to={"/contact"}>Contact</Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;