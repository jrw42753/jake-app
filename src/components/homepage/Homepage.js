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
import ProfileCard from '../shared/ProfileCard'
import SkillsCard from '../shared/SkillsCard'


function Homepage() {
    const firestore = firebase.firestore();
    const experiencesRef = firestore.collection('experiences');
    console.log("experiences: ", experiencesRef);
    const query = experiencesRef.orderBy('title');
    const [experiences] = useCollectionData(query, { idField: 'id' });

    return (
        <div className="main-page">
            <div className="profile-container">
                <ProfileCard />
                <SkillsCard />
            </div>
            <div className="card-container">
                {experiences && experiences.map(experience => <ExperienceCard key={experience.id} experience={experience} />)}
            </div>
        </div>
    );
}


// const mapStateToProps = (state) => {
//     return {
//         experiences: state.firestore.ordered.projects
//     }
// }

export default Homepage