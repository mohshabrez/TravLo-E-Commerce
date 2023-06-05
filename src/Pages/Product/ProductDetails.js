import "./product.css"
import {useParams} from "react-router-dom"
import { UseCommerce } from "../../Context/CommerceContext"
import { ProductCard } from "../Product/ProductCard";

export function ProductDetails(){
    const {productId} = useParams()
    const {state} = UseCommerce();

    const getDetails = state.ProductsData.find((product) => product?._id === productId)

    return(
        <>
        <ProductCard {...getDetails}/>
        </>
    )
}