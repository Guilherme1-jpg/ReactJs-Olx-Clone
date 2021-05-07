import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isLogged} from '../helpers/AuthHandler';

export default ({children, ...rest}) => {
    let Logged = isLogged();
    let authorized = (rest.private && !Logged) ? false:true; 

    return (
        <Route
            {...rest}
            render={()=>
                authorized ? children : <Redirect to="/sign" />
                
            }
        />
    );

}