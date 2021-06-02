import React from 'react';
import Card from 'react-bootstrap/Card'
import { string, any } from 'prop-types';
import StackChip from './StackChip';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExperienceCard = ({experience}) => {

    let stacksCSS = []; 
    stacksCSS = experience.stacks.map((item) => item.toLowerCase().split(" ").join(""));
    console.log("stacksCSS ", stacksCSS)

    return (
        <Card bg="dark" text="white" border ="light" className="text-left custom-card-styles" style={{ width: '18rem' }}>
            <Card.Body>
                <div className="card-title-link"> 
                    <Card.Title>{experience.title}</Card.Title>
                    {/* <Card.Link href={experience.repoUrl}>Repository <FontAwesomeIcon icon={faExternalLinkAlt} /></Card.Link> */}
                </div>
                <Card.Text className="card-text">
                {experience.description}
                </Card.Text>
                <div className="chip-list">
                    {experience.stacks && experience.stacks.map(stack => <StackChip key={stack} stack={stack} />)}
                </div>
            </Card.Body>
        </Card>
    )
}

export default ExperienceCard