import React from "react"
import { createContext, useContext, useReducer, useEffect, useState
 } from "react";
import { commerceReducer, ACTIONS
 } from "../Reducer/CommerceReducer";
import axios from "axios"



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



 const CommerceContext = createContext(null)
 const dispatchContext = createContext(null)

 

export function CommerceProvider({children}){
    const[products, setProducts] = useState([])
    const[categories, setCategories] = useState([])
    const [loadingState, setLoadingState] = useState(false)

    useEffect(() => {
        (async () => {
            
            try {
                setLoadingState(true)
                let details = await getProducts()
                if(details){
                    dispatch({
                        type: ACTIONS.INITIAL,
                        payLoad: details
                    })
                }
                setProducts(await getProducts())
                setLoadingState(false)
            }

            catch (e) {
                console.error(e.message)
            }
        })();

        (async () => {
            try {
                setLoadingState(true)
                let catdetails = await getCategories()
                if(catdetails){
                    dispatch({
                        type: ACTIONS.CATINITIAL,
                        payLoad: catdetails
                    })
                }
                setCategories(await getCategories())
                setLoadingState(false)
            }

            catch (e) {
                console.error(e.message)
            }
        })();
    },[])

    


    const initialState = {
        commerceCategoryData: [],
        ProductsData: [],
        toSort: null,
        best:null,
        inStock:false,
        DeliveryTime: false,
        bestSellers: false,
        oldData: [],
        brandedProducts: false,
        personalizedDesigns: false,
        cartItems:[],
        price:0,
        originalPrice:0,
        count:1,
        wishList:[],
        wishlistref: false,
    }
    const [state, dispatch] = useReducer(commerceReducer, initialState)
    return(
        <CommerceContext.Provider value={{state, categories, products, loadingState}} >
            <dispatchContext.Provider value={{dispatch}}>
                {children}
            </dispatchContext.Provider>
        </CommerceContext.Provider>
    )
}

export const UseCommerce = () => useContext(CommerceContext);
export const UseDispatch = () => useContext(dispatchContext)