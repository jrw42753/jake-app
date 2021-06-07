import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const EducationCard = ({education}) => {
    

    return (
        <Card bg="dark" text="white" border ="light" className="text-left custom-card-styles" style={{ width: '18rem' }}>
            <Card.Body>
                <div className="education-card-container">
                    <div className ="education-logo shadow">
                        <img src={education.logo} width="70" className="education-logo-img" />
                    </div>
                    <div className="education-body">
                        <Card.Title>{education.where}</Card.Title>
                        {/* <Card.Text>
                            {education.type}<br></br>
                            {education.time}<br></br>
                            {education.location}<br></br>
                        </Card.Text> */}
                        <ListGroup variant="flush" className="custom-list-group">
                            <ListGroupItem className="custom-list-item">{education.type}</ListGroupItem>
                            <ListGroupItem className="custom-list-item">{education.time}</ListGroupItem>
                            <ListGroupItem className="custom-list-item">{education.location}</ListGroupItem>
                        </ListGroup>
                    </div>
                </div>
                
            </Card.Body>
        </Card>
    )
}

export default EducationCard