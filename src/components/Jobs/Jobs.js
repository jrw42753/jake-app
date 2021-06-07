import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import React from 'react'
import fbConfig from '../../firebase/fbConfig'
import JobCard from '../shared/JobCard'

function Jobs() {

    const firestore = firebase.firestore();
    const jobsRef = firestore.collection('jobs');
    console.log("jobs: ", jobsRef);
    const query = jobsRef.orderBy('rank');
    const [jobs] = useCollectionData(query, { idField: 'id' });

    

    return (
        <div className="card-container">
            <h3 className="portfolio-title">Job Experience</h3>
            {jobs && jobs.map(job => <JobCard key={job.id} job={job} />)}
        </div>
    );
}


export default Jobs