import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'; import auth from '../../firebase.init';
;

const RequrieAuth = ({ children }) => {

    const location = useLocation();
    const [user] = useAuthState(auth);

    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequrieAuth;