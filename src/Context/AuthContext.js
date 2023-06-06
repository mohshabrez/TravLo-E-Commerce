import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();


export function AuthProvider({children}){
    const [email, setMail] = useState("")
    const [ password, setPassword] = useState("")
    const [isAuth, setAuth] = useState(false)
    const [data, setData] = useState([])

    useEffect(()=> {
        localStorage.getItem("token") ? setAuth(true) : setAuth(false);
    },[isAuth])
    
   

    const setCredentials = async (e) => {
        e.preventDefault()

        let validateData = {
            email: "",
            password: "",
            name:""
        }

        if (e.target.value === "Test User") {
            toast.success("Logged in with Test user")
            validateData = {
                ...validateData,
                email: "adarshbalika@gmail.com",
                password: "adarshbalika",
                name: "Adarsh Balika"
            }
            setData(validateData)
            setMail("");
            setPassword("");
            
        }
        if (e.target.value === "Sign In") {
            validateData = {
                ...validateData,
                email: email,
                password: password,    
            }
            setData(validateData)
            setMail("");
            setPassword("");
            
        }

        try {
            const encodedToken = localStorage.getItem("token")
            const body = {
                validateData
            }
            const res = await axios.post("/api/auth/login", body);
            localStorage.setItem("token", await res.data.encodedToken);
            setAuth(localStorage.getItem("token") ? true : false);
            toast.success("Logged in Successfully")
        }

        catch (err) {
            toast.error("Login error, Check credentials again!!")
            const errorType = "Auth"
            console.error(errorType, err)
            
        }
    }
    const registerUser = async (e) => {
        try {
            e.preventDefault();
            await axios.post("/api/auth/signup", JSON.stringify({ email, password }));
            setPassword("");
            setMail("");
            toast.info("User created Successfully")
        }
        catch (err) {
            toast.info("Check the credentials again!!!")
            const errorType = "signUp";
            console.error(errorType, err)
        }
    }


    return(
        <AuthContext.Provider value={{ registerUser, setCredentials, email, password, setMail, setPassword, isAuth, setAuth,data}}>
            {children}
        </AuthContext.Provider>
    )
}


export const UseAuth = () => useContext(AuthContext)