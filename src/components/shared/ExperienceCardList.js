import React from 'react';
import Card from 'react-bootstrap/Card'
import ExperienceCard from '../shared/ExperienceCard'

const ExperienceCardList = ({experiences}) => {
    return (
        <div className="section">
            { experiences && experiences.map(experience => {
                return  (
                    <ExperienceCard experience={experience} key={experience.id}/>
                )
            })}
        </div>
    )
}

export default ExperienceCardList