import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const JobCard = ({job}) => {
    

    return (
        <Card bg="dark" text="white" border ="light" className="text-left custom-card-styles" style={{ width: '18rem' }}>
            <Card.Body>
                <div className="education-card-container">
                    <img src={job.logo} className="job-logo-img shadow" />
                    <div className="job-body">
                        <Card.Title>{job.company}</Card.Title>
                        <ListGroup variant="flush" className="custom-list-group">
                            <ListGroupItem className="custom-list-item">{job.title}</ListGroupItem>
                            <ListGroupItem className="custom-list-item">{job.time}</ListGroupItem>
                            <ListGroupItem className="custom-list-item">
                                <ul>
                                    {job.duties && job.duties.map(dutie => <li key={dutie}>{dutie}</li>)}
                                </ul>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </div>
                
            </Card.Body>
        </Card>
    )
}

export default JobCard