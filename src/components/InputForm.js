import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
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
            <Form className="input-form">
                <Form.Group>
                    <Form.Label>Crystal</Form.Label>
                    <Form.Control size="sm" type="number" placeholder="ex: 300" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tickets</Form.Label>
                    <Form.Control size="sm" type="number" placeholder="ex: 10" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Ten Draw Ticket</Form.Label>
                    <Form.Control size="sm" type="number" placeholder="ex: 1" />
                </Form.Group>
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