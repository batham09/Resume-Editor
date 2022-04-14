import {combineReducers} from 'redux';
import documentReducer from './documentReducer';
import contactReducer from './contactReducer';
import eductaionReducer from './educationReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
const rootReducer= combineReducers({
    document: documentReducer,
    contact: contactReducer,
    education:eductaionReducer,
    firebase: firebaseReducer,
    firestore:firestoreReducer,
    auth: authReducer
})

export default rootReducer;