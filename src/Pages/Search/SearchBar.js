import "./search.css"
import React from "react";
import { Link } from "react-router-dom";
import { UseCommerce, UseDispatch } from "../../Context/CommerceContext";
import { NavBar } from "./NavBar";
import {useState} from "react"
import {ACTIONS} from "../../Reducer/CommerceReducer"

export function SearchBar(){
    const[searchValue, setSearchValue] = useState("")
    const {dispatch} = UseDispatch();
    const {state} = UseCommerce()
    const searchBarHandler = (e) => {
        setSearchValue(e.target.value)
    }
    const searchBtn = (searchValue) => {
        if(searchValue){
            dispatch({
                type: ACTIONS.SEARCH,
                payLoad: searchValue
            })
        }else{
            dispatch({
                type:ACTIONS.RESET,
                payLoad: ACTIONS.SEARCH
            })
        }
    }

    const AtoCart = (product) => {
        dispatch({
            type:ACTIONS.ADDCART,
            payLoad: product
        })
    }
    const favClick = (product) => {
        dispatch({
            type: ACTIONS.ADDWISH,
            payLoad: product
        })
        dispatch({
            type:ACTIONS.REMOVEFROMWISH,
            payLoad: product
        })
    }

    return(
        <div className="SearchBarPage">
        <NavBar/>
        <div className="searchElements">        
            <div className="bar">
                <input className="searchpagebar" placeHolder="🔍 Search by product Name" onChange={searchBarHandler}/>
                <button className="searchpagebtn" onClick={()=>searchBtn(searchValue)} >Search</button>
            </div>
                <h1 className="searchHeading">SEARCH RESULT FOR "{searchValue}"</h1>
            <div className="ProductListing">
                <ul>
                    <div className="searchULProducts">
                    {state.ProductsData.map((product) => {
                        return(
                            <li key={product?._id}>
                                <div className="searchproductCard">
                                <Link to={`/productDetails/${product?._id}`}>
                                    <img src={product?.image} alt="ProductsImages"/></Link>
                                    <div className="productDetails">
                                        <p style={{marginBottom:"-5px", color:"#778899", }}>Brand - {product?.brand}</p>
                                        <h4 style={{fontSize:"larger" ,marginBottom:"28px"}}>{product?.name}</h4>
                                        <p style={{fontStyle:"italic", fontWeight:"bold", marginTop:"-6px"}}>₹{product?.price}</p>
                                        <p style={{fontStyle:"italic", marginTop:"-27px", marginLeft:"47px",color:"grey", textDecoration:"line-through"}}>₹{product?.originalPrice}</p>
                                        <p className="material-symbols-outlined" onClick={()=>favClick(product)}><svg  xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill={product?.wish ? "rgb(246, 108, 3)" : "#C0C0C0"}  class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                        </svg></p>
                                        <button className="AtoCart" onClick={()=>AtoCart(product)} style={{backgroundColor:!product.inStock ? "rgb(203, 164, 133)": "rgb(246, 108, 3)" }} disabled={!product.inStock}>Add to Cart</button> 
                                        <div className="stocks">
                                             <p style={{color: `${product?.inStock ? "#32cd32": "red"}`}}>{product?.inStock ? "InStock" : "Out Of Stock"}</p>
                                             <p  style={{color: `${product?.deliveryTime ? "red": ""}`, marginTop:"-10px"}}>{product?.deliveryTime ? "Fast Delivery" : ""}</p>
                                        </div>
                                    </div>
                                   
                                </div>
                            </li>
                        )
                    })}
                    </div>
                </ul>
            </div>
        </div>
        </div>
    )
}