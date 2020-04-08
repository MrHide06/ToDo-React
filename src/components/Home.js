import React from 'react'
import '../App.scss'
import { Container, Col } from 'react-bootstrap'

export default function Home() {
    return (
        <div className="homepage">
            <Container className="container">
                <Col md={12}>
                    <h2>Selamat Datang</h2>
                </Col>
            </Container>
        </div>
    )
}
