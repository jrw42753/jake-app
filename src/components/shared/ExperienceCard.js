import React from 'react';
import Card from 'react-bootstrap/Card'
import { string, any } from 'prop-types';
import StackChip from './StackChip';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExperienceCard = ({experience}) => {

    let stacksCSS = []; 
    let urlText;
    stacksCSS = experience.stacks.map((item) => item.toLowerCase().split(" ").join(""));
    if (experience.urlType == "screenshots") {
        urlText = "Screenshots"; 
    } else {
        urlText = "Repository";
    }
    const renderCardLink = () => {
        if (typeof experience.javaUrl !== 'undefined') {
            let texts = {angularText: "Angular Repo", javaText: "Java Repo"}
            return <div><Card.Link target="_blank" href={experience.repoUrl}>{texts.angularText} <FontAwesomeIcon icon={faExternalLinkAlt} /></Card.Link> <Card.Link href={experience.javaUrl}>{texts.javaText} <FontAwesomeIcon icon={faExternalLinkAlt} /></Card.Link></div>
        } else {
            return <div><Card.Link target="_blank" href={experience.repoUrl}>{urlText} <FontAwesomeIcon icon={faExternalLinkAlt} /></Card.Link></div>
        }
    }

    const renderWebsiteLink = () => {
        if (experience.website) {
            return <span><Card.Link target="_blank" href={experience.website}><FontAwesomeIcon icon={faLink} /></Card.Link></span>
        }
    }
    

    return (
        <Card bg="dark" text="white" border ="light" className="text-left custom-card-styles" style={{ width: '18rem' }}>
            <Card.Body>
                <div className="card-title-link"> 
                    <Card.Title>
                        {experience.title}&nbsp;&nbsp;{renderWebsiteLink()}
                    </Card.Title>
                    {renderCardLink()}
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