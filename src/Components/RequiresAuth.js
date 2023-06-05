import { UseAuth } from "../Context/AuthContext"
import { Navigate, useLocation } from "react-router"

export function RequiresAuth({children}){
    let location = useLocation()
    const {isAuth} = UseAuth()
    return isAuth ? (
        children ) : (
            <Navigate to="/login" state={{from : location
            }}/>
    )
}