import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

function Header(){
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" className="navbar">
                    <Navbar.Toogle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collpase id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Link to="/ClassTodo">ClassTodo</Link>
                        </Nav>
                        <Nav>
                            <Link to="/FunctionTodo">FunctionTodo</Link>
                        </Nav>
                    </Navbar.Collpase>
                </Navbar>                
            </div>
        )
    }
export default Header