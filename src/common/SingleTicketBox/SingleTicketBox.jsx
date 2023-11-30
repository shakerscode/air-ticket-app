import { Container, Row, Col } from 'react-bootstrap';
import React from "react";
import "./SingleTicketBox.css"

export default function SingleTicketBox({data}){ 
    return(
        <>
            <div className="mt-3 border rounded p-3">
                <Row>
                    <Col className="ticketEmphasize font-weight-bold">
                        10:00am - 2:00pm
                    </Col>
                    <Col className='ticketDetail'>
                        8h 32m (1 stop)
                    </Col>
                    <Col className="ticketEmphasize d-flex justify-content-end font-weight-bold">
                        ${data?.price}
                    </Col>
                </Row>

                <Row>
                    <Col className='ticketDetail'>
                        {data?.from} - {data?.to}
                    </Col>
                    <Col className='ticketDetail'>
                        53m in Dallas(DFW)
                    </Col>
                    <Col className="ticketDetail d-flex justify-content-end">
                        Roundtrip per traveler
                    </Col>
                </Row>
                
                <Row>
                    <Col className='ticketDetail'>
                        {data?.airline}
                    </Col>
                </Row>
            </div>
        </>
    )
}