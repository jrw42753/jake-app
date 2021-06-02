import React from 'react';
import Card from 'react-bootstrap/Card'
import { string, any } from 'prop-types';
import StackChip from './StackChip';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = ({profile}) => {

    return (
        <Card className="shadow" bg="dark" text="white" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-7373a.appspot.com/o/profile.png?alt=media&token=cae8f93f-37c2-4f97-b23a-eb113e08cd51" />
            <Card.Body>
                <Card.Title>Jake Wiesenthal</Card.Title>
                <Card.Text>
                    <div className="profile-icon-group">
                        <a target="_blank" href="https://github.com/jrw42753">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/jakewiesenthal/">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a target="_blank" href="mailto:wiesenthal.james@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProfileCard