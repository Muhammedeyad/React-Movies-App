import { Navigate } from "react-router-dom"
import React from "react"

export const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
    const isUserExists = localStorage.getItem("users")
    if(!isUserExists){
        return <Navigate to={'/not-found'}/>
    }
    return <div>
        {children}
    </div>
}
