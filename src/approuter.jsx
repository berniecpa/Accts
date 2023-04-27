import React from 'react';
import AppContainer from './appcontainer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import config from 'config';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const AppRouter = (props) => {

    return(
        <Router basename={`${config.publicPath}`}>
             <Route render={(props)=> <AppContainer {...props}/>} />
        </Router>
    );    
}


export default AppRouter;