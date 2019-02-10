import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import '../css/components.css';

class Hightlight extends Component 
{
    render()
    {
        return (
            <Container className="Hightlight-Holder clearfix">
                <Row>
                    <Col md={3}><CrystalHolder /></Col>
                    <Col md={3}><TicketHolder /></Col>
                    <Col md={3}><TenDrawTicket /></Col>
                    <Col md={3}><TotalDrawHolder /></Col>
                </Row>
            </Container>
        );
    }
}

const CrystalHolder = ()=>
<div className="HightComponent">
    <span className="hightlight-icon st-red">
    {
        // image here...
    }
    </span>
    <span className="hightlight-info">
        <span>300</span>
        <div>Total Crystal</div>
    </span>
</div>

const TicketHolder = ()=>
<div className="HightComponent">
    <span className="hightlight-icon st-red">
    {
        // image here...
    }
    </span>
    <span className="hightlight-info">
        <span>10</span>
        <div>Tickets</div>
    </span>
</div>

const TenDrawTicket = ()=>
<div className="HightComponent">
    <span className="hightlight-icon st-red">
    {
        // image here...
    }
    </span>
    <span className="hightlight-info">
        <span>1</span>
        <div>Ten Draw Tickets</div>
    </span>
</div>

const TotalDrawHolder = ()=>
<div className="HightComponent">
    <span className="hightlight-icon st-red">
    {
        // image here...
    }
    </span>
    <span className="hightlight-info">
        <span>21</span>
        <div>Total Draws</div>
    </span>
</div>

export default Hightlight;