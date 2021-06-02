import authReducer from './authReducer'
import experienceReducer from './experienceReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer, 
    experience: experienceReducer,
    firestore: firestoreReducer
});

export default rootReducer