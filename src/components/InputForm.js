import React, { Component } from 'react';
import {Form, Row, Col, FormControl, FormCheck, Button} from 'react-bootstrap';
import '../css/components.css';

class InputForm extends Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            crystal: 0,
            ticket: 0,
            tenDrawTicket: 0
        }
    }

    render()
    {
        return (
            <Form>
                <Form.Group as={"Row"}>
                    <Form.Label as="Legend" column>
                        Update Type:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            custom
                            type="radio"
                            label="Update Status"
                            name="formRadios"
                            id="formRadios1" />
                    </Col>
                    <Col sm={10}>
                        <Form.Check
                            custom
                            type="radio"
                            label="Save up"
                            name="formRadios"
                            id="formRadios2" />
                    </Col>
                    <Col sm={10}>
                        <Form.Check
                            custom
                            type="radio"
                            label="Chucked"
                            name="formRadios"
                            id="formRadios3" />
                    </Col>
                </Form.Group>
                <br />
                
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        );
    }
    

    onValueChange(event)
    {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    onSubmitClicked()
    {
        console.log(this.state);
    }
}


export default InputForm;