import React, { Component } from 'react'
import ExperienceCardList from '../shared/ExperienceCardList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import fbConfig from '../../firebase/fbConfig'
import ExperienceCard from '../shared/ExperienceCard'



function Homepage() {
    const firestore = firebase.firestore();
    const experiencesRef = firestore.collection('experiences');
    const query = experiencesRef.orderBy('title');
    const [experiences] = useCollectionData(query, { idField: 'id' });

    return (
        <div className="card-container">
            <h3 className="portfolio-title">Portfolio</h3>
            {experiences && experiences.sort((a, b) => a.rank - b.rank).map(experience => <ExperienceCard key={experience.id} experience={experience} />)}
        </div>
    );
}


export default Homepage