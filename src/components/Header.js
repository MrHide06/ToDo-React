import React from 'react'
import '../App.scss'

import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
                <Nav className="mr-auto" >
                    <Nav.Item className="mr-5">
                        <Link to="/ClassTodo" clasName="link">ClassTodo</Link>
                    </Nav.Item>    
                    <Nav.Item>
                        <Link to="/FunctionTodo" clasName="link">FunctionTodo</Link>
                    </Nav.Item>           
                </Nav>           
            </Navbar>
        </div>
    )
}
export default Header