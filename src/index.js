import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss'


// import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from './store/reducers/rootReducer'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { reduxFirestore, getFirestore } from 'redux-firestore'
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
// import fbConfig from './fbConfig'
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
// import { createFirestoreInstance } from 'redux-firestore'
// import firebase from 'firebase/app'
// import reportWebVitals from './reportWebVitals';

// const store = createStore(rootReducer,
//   compose(
//     // applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     // reactReduxFirebase(fbConfig), // redux binding for firebase
//     // reduxFirestore(fbConfig) // redux bindings for firestore
//   )
// );

// const rrfProps = {
//   firebase,
//   config: fbConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance // <- needed if using firestore
// }

// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

ReactDOM.render(
    // <Provider store={store}>
    //   <ReactReduxFirebaseProvider {...rrfProps}>
        <App />,
    //   </ReactReduxFirebaseProvider>
    // </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
