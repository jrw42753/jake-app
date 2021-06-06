import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import React from 'react'
import fbConfig from '../../firebase/fbConfig'
import EducationCard from '../shared/EducationCard'

function Education() {

    const firestore = firebase.firestore();
    const educationRef = firestore.collection('education');
    console.log("education: ", educationRef);
    const query = educationRef.orderBy('rank');
    const [education] = useCollectionData(query, { idField: 'id' });


    return (
        <div className="card-container">
            <h3 className="portfolio-title">Education</h3>
            {education && education.map(education => <EducationCard key={education.id} education={education} />)}
        </div>
    );
}


export default Education