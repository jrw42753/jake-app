import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import React from 'react'
import fbConfig from '../../firebase/fbConfig'
import EducationCard from '../shared/EducationCard'

function Photobook() {

    const firestore = firebase.firestore();
    const photosRef = firestore.collection('photos')
    const photoQuery = photosRef.orderBy('src');
    const [photos] = useCollectionData(photoQuery, { idField: 'id'});

    return (
        <div className="picture-container">
            {photos && photos.map(photo => <div key={photo.id} className={photo.size}><img className="photo" src={photo.src} /></div>)}
        </div>
    );
}


export default Photobook