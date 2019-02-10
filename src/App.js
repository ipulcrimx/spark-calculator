import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import InputForm from './components/InputForm';
import Chart from './components/Chart';
import Graph from './components/Graph'
import './App.css';

class App extends Component 
{
    render()
    {
        return (
            <div className="main-content">
                <Container className="Hightlight-Holder clearfix">
                    <Row>
                        <Col lg={3} className="dummy-purple">
                            <InputForm />
                        </Col>
                        <Col md={8} className="dummy-blue">
                            <Graph />
                            <Chart />
                        </Col>

                        <Col lg={1} className="dummy-purple">
                            testing
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
