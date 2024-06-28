import React from 'react'
import { useAuth } from "./Auth";
import { Navigate,useLocation } from 'react-router-dom';

 const RequierAuth = ({children}) => {
    const auth = useAuth();
    const  location = useLocation();
    if( !auth.user && !auth.password){

        return <Navigate to = "/login" state ={{ path :location.pathname}}/>
    }
  return children;
};
export default RequierAuth;