import React from 'react'
import '../App.scss'

import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div>
            <Nav calssName="justify-content-center bg-dark py-3">
                <Nav.Item className="mr-5">
                    <Link to="/" clasName="link">Home</Link>
                </Nav.Item>
                <Nav.Item className="mr-5">
                    <Link to="/ClassTodo" clasName="link">ClassTodo</Link>
                </Nav.Item>    
                <Nav.Item>
                    <Link to="/FunctionTodo" clasName="link">FunctionTodo</Link>
                </Nav.Item>           
            </Nav>           
        </div>
    )
}
export default Header