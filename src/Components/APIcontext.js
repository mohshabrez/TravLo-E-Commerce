import React from "react"
import {useState, createContext, useEffect, useContext} from "react"
import axios from "axios"
import { UseDispatch } from "../Context/CommerceContext";
import { ACTIONS } from "../Reducer/CommerceReducer";


export const getProducts = async () => {
    const res = await axios.get("/api/products");
    const products = await res.data.products;
    return products;
}

export const getCategories = async () => {
    const res = await axios.get("/api/categories");
    const categories = await res.data.categories;
    return categories;
}



const APIcontext = createContext(null)

export function APIprovider({children}){
    const {dispatch} = UseDispatch()
    const[products, setProducts] = useState([])
    const[categories, setCategories] = useState([])
   
    useEffect(() => {
        (async () => {
            try {
                let details = await getProducts()
                if(details){
                    dispatch({
                        type: ACTIONS.INITIAL,
                        payLoad: details
                    })
                }
                setProducts(await getProducts())
            }

            catch (e) {
                console.error(e.message)
            }
        })();

        (async () => {
            try {
                setCategories(await getCategories())
            }

            catch (e) {
                console.error(e.message)
            }
        })();
    },[])

   

    return(
        <APIcontext.Provider value={{products,categories}}>
            {children}
        </APIcontext.Provider>
    )

}

export const useData = () => useContext(APIcontext)