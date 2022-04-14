import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducer/rootReducer'
import "firebase/firestore"
import firebase from "firebase/app"
import "firebase/auth"
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB_6DGTQ9GNeXWeffjLRvvIfqmHrXrTEQo",
  authDomain: "resume-creator-c1909.firebaseapp.com",
  projectId: "resume-creator-c1909",
  storageBucket: "resume-creator-c1909.appspot.com",
  messagingSenderId: "525327352946",
  appId: "1:525327352946:web:773094619bee1ed369eeeb"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore()



const reduxStore= createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),reduxFirestore(firebase)));



ReactDOM.render(
  
    <BrowserRouter>
    <Provider store={reduxStore}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App/>
    </ReactReduxFirebaseProvider>
      </Provider>
    </BrowserRouter>
,
  document.getElementById('root')
);