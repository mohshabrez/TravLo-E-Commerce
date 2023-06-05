import { createContext, useContext } from "react"
import { UseDispatch } from "./CommerceContext"
import axios from "axios"
import {ACTIONS} from "../Reducer/CommerceReducer"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css"

export const CartContext = createContext()



export function CartProvider({children}){
    const {dispatch} = UseDispatch()
    
    
    const addToCartHandler = async (product) => {
        try {
            const encodedToken = localStorage.getItem("token")
            const config = {
                headers:{
                    authorization:encodedToken
                }
            }
            const body = {
                product
            }
            
            const response = await axios.post("/api/user/cart", body, config)
            toast.success("Item added in Cart", {
                theme: 'light'
            })
            dispatch({
                type: ACTIONS.ADDTOCART,
                payLoad: response.data.cart
            })
            
          }
    
        catch (e){
            console.log(e)
        }
    }

    const incrementHandler = async (cart) => {
        try{
            const encodedToken = localStorage.getItem("token")
            const config = {
                headers: {
                    authorization:encodedToken
                }
            }
            const body = {
                action: {
                    type: 'increment',
                    
                }
            }
            const response = await axios.post(`/api/user/cart/${cart?._id}`, body, config)
            toast.info("Item get Incremented")
            dispatch({
                type: ACTIONS.INCREMENT,
                payLoad: response.data.cart
            })

        }
        catch (err){
            console.log(err)
        }
    }

    const decrementHandler = async (cart) => {
        try{
            const encodedToken = localStorage.getItem("token")
            const config = {
                headers: {
                    authorization:encodedToken
                }
            }
            const body = {
                action: {
                    type: 'decrement',
                    
                }
            }
            const response = await axios.post(`/api/user/cart/${cart?._id}`, body, config)
            toast.info("Item got Decremented")
            dispatch({
                type: ACTIONS.DECREMENT,
                payLoad: response.data.cart
            })

        }
        catch (err){
            console.log(err)
        }
    }


    return(
        <CartContext.Provider value={{addToCartHandler, incrementHandler, decrementHandler}}>
            {children}
        </CartContext.Provider>
    )
}

export const UseCart = () => useContext(CartContext)