import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

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
                <Container fluid="true">
                    <Row>
                        <Col md={3}>
                            <div className="side-div">
                                <InputForm />
                            </div>
                        </Col>
                        <Col md={6}>
                            <Row className="dummy-white">
                                <Col xl={8}>
                                    <h2>Spark Calculator</h2>
                                </Col>
                                <Col xl={8} className="graph">
                                    <Graph />
                                </Col>
                                <Col xl={8} className="graph">
                                    <Chart />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <div className="side-div">
                                <p>
                                    This will be notification or history div
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
