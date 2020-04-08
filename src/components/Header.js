import React from 'react'
import '../App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import NavbarToogle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <NavbarToogle aria-controls="responsive-navbar-nav" />
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className="navlink">
                        <Link to="/" clasName="link">Home</Link>
                        <Link to="/ClassTodo" clasName="link">ClassTodo</Link>
                        <Link to="/FunctionTodo" clasName="link">FunctionTodo</Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>                
        </div>
    )
}
export default Header