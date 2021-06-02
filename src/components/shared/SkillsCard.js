import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faSalesforce } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const SkillsCard = ({skills}) => {

    return (
        <Card bg="dark" text="white" style={{ width: '18rem' }} className="skills-card">
            <Card.Body className="custom-card-body">
                <Card.Title>Skills</Card.Title>
            </Card.Body>
            <ListGroup variant="flush" className="custom-list-group">
                <ListGroupItem className="custom-list-item"><FontAwesomeIcon icon={faAngular} />&nbsp;&nbsp;Angular </ListGroupItem>
                <ListGroupItem className="custom-list-item"><FontAwesomeIcon icon={faJava} />&nbsp;&nbsp;Java</ListGroupItem>
                <ListGroupItem className="custom-list-item"><FontAwesomeIcon icon={faSalesforce} />&nbsp;&nbsp;Marketing Cloud</ListGroupItem>
                <ListGroupItem className="custom-list-item"><FontAwesomeIcon icon={faReact} />&nbsp;&nbsp;React</ListGroupItem>
                <ListGroupItem className="custom-list-item"><FontAwesomeIcon icon={faDatabase} />&nbsp;&nbsp;SQL</ListGroupItem>
                <ListGroupItem className="custom-list-item"><FontAwesomeIcon icon={faHtml5} />&nbsp;&nbsp;HTML & CSS</ListGroupItem>
                <ListGroupItem className="custom-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="1em" viewBox="0 0 512 512">
                        <title>ionicons-v5_logos</title>
                        <path d="M386.24,121.68a11,11,0,0,0-18.57-6L80,400l159.34,91.81a33.32,33.32,0,0,0,32.4,0L432,400Z"/>
                        <path d="M221.32,136.68l0-.05-103,192.07a4,4,0,0,0,6.34,4.74L256.61,203l.5-.5Z"/>
                        <path d="M207.19,129.06l5-9.39L160,21.92c-5.05-9.47-17.9-7.06-19.56,3.54L89.09,343.7a1.33,1.33,0,0,0,2.49.84h0Z"/><path d="M235.37,129,269,190.77l32.47-32.09L265.26,90c-4.19-8-14.38-8.79-18.53-.81l-16.39,30.63,5,9.14Z"/>
                    </svg>&nbsp;&nbsp;Google Firebase</ListGroupItem>
                <ListGroupItem className="custom-list-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="0.75em" viewBox="0 0 301112 333331" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M301110 291619c124 22886-18333 41521-41206 41644-1700 14-3415-82-5101-288-21227-3140-36776-21611-36256-43057V43342c-507-21474 15084-39944 36324-43057 22721-2660 43304 13602 45964 36324 192 1673 288 3346 274 5032v249977z"/>
                    <path d="M41288 250756c22804 0 41288 18484 41288 41288s-18484 41288-41288 41288S0 314848 0 292044s18484-41288 41288-41288zm108630-125126c-22913 1261-40685 20472-40150 43413v110892c0 30099 13246 48364 32649 52258 22393 4539 44209-9928 48748-32320 562-2743 836-5526 822-8323V167124c41-22886-18470-41467-41356-41507-233 0-480 0-713 14z"/>
                </svg>&nbsp;&nbsp;Google Analytics</ListGroupItem>
                <ListGroupItem className="last-custom-list-item">
                <svg viewBox="0 0 2500 2325.5" fill="#ffffff" width="0.75em">
                    <g>
	                    <path d="M2187.7,1691h-907.8c-219.5,0-342.5,153.7-342.5,317.2c0,150.9,104.3,317.2,342.5,317.2h907.8L2187.7,1691z"/>
                        <ellipse cx="2187.7" cy="2007.7" rx="312.3" ry="317.2"/>
                        <path d="M1250.3,845.2H342.5C123,845.2,0,998.9,0,1162.5c0,150.9,104.3,317.2,342.5,317.2h907.8V845.2z"/>
                        <ellipse cx="1250.3" cy="1162.5" rx="312.3" ry="317.2"/>
                        <path d="M2187.7,0h-907.8c-219.5,0-342.5,153.7-342.5,317.2c0,150.9,104.3,317.2,342.5,317.2h907.8L2187.7,0z"/>
                        <ellipse cx="2187.7" cy="317.2" rx="312.3" ry="317.2"/>
                    </g>
                </svg>&nbsp;&nbsp;Google Data Studio</ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default SkillsCard