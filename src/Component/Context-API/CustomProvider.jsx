import React, { Children, createContext, useState } from 'react'


export const AuthContext=createContext();
export default function CustomProvider() {

    const [isloggedin,setIsLoggedIn]=useState(false);
    const [isAdmin,setIsAdmin]=useState(false);
    const login=()=>{
        setIsLoggedIn(true)
    }

    const logout=()=>{
        setIsLoggedIn(false)
    }

    const AdminStatus=(value)=>{
        setIsAdmin(value);
    }
  return (
    <div>
      <AuthContext.Provider value={{isloggedin,login,logout,AdminStatus,isAdmin}}>{Children}</AuthContext.Provider>
    </div>
  )
}
