import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';


const PublicRouter = ({children}) => {
    const {user} = useContext(AuthContext)
    return (
        user.logged ? <Navigate to="/*"/> : children

       //!user.logged ? children : <Navigate to="/login"/>
    );
};

export default PublicRouter;