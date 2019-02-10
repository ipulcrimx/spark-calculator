import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import {MDBContainer} from 'mdbreact';

class Chart extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            dataPie: 
            {
                labels: ["Crystal", "Ticket", "Ten Draw Tickets"],
                datasets: 
                [
                    {
                        data: [170, 56, 10],
                        backgroundColor: 
                        [
                            "#F7464A",
                            "#46BFBD",
                            "#FDB45C"
                        ],
                        hoverBackgroundColor: 
                        [
                            "#FF5A5E",
                            "#5AD3D1",
                            "#FFC870"
                        ]
                    }
                ]
            }
        }
    }

    render()
    {
        return (
            <MDBContainer>
                <h3 className="mt-5">Spark Chart</h3>
                <Pie data={this.state.dataPie} option={{ responsive: true}} />
            </MDBContainer>
        );
    }
}

export default Chart;