import React, { useContext } from 'react'
import { AuthContext } from './CustomProvider'
import { Navigate } from 'react-router-dom';

export default function ProtectPrivate({children}) {

   const {isAdmin}= useContext(AuthContext)
   if(isAdmin){
    return children;
   }else{
    return <Navigate to="/login"/>
   }
  
}
