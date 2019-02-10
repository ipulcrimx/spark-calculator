import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import InputForm from './components/InputForm';
import './App.css';

class App extends Component 
{
    render()
    {
        return (
            <div>
                <Container className="Hightlight-Holder clearfix">
                    <Row>
                        <Col lg={4} className="dummy-purple">
                            <InputForm />
                        </Col>
                        <Col md={8} className="dummy-blue">
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
