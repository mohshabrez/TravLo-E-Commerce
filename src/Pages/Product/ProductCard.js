import "./product.css"
import { ProductNavBar } from "../Product/ProductNavBar";
import {ACTIONS} from "../../Reducer/CommerceReducer"
import { UseCommerce, UseDispatch } from "../../Context/CommerceContext";
import { UseCart } from "../../Context/CartContext";
import { UseAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router";


export function ProductCard(product){
    const { name, star, brand, price, originalPrice,percentage,  image,} = product;
    const {state} = UseCommerce()
    const {dispatch} = UseDispatch()
    const {addToCartHandler} = UseCart()
    const {isAuth} = UseAuth()

    const navigate = useNavigate()

    const isInCart = state.cartItems.some((cart) => cart?._id === product?._id)
    const isInWish = state.wishList.some((wish) => wish?._id === product?._id)


    const addWish = (product) => {
        dispatch({
            type: ACTIONS.ADDWISH,
            payLoad: product
        })
    }

    return(
        <>
        <ProductNavBar/>
        <div className="ProductDetailed">
            <div className="productimg">
                <img src={image} alt="productImage"/>
            </div>
            <div className="details">
                <h1 className="detailTitleH1">WildCraft's {name}</h1>
                <h3 className="detailbrand" >Brand - {brand}</h3>
                <h3 className="detailstar" >{star}⭐</h3>
                <h3 className="detailPrice" >₹{price}</h3>
                <h3 className="detailOP" >₹{originalPrice}</h3>
                <h3 className="detailPerc" >({percentage}% OFF)</h3>
                <p className="detailMsg" >⚡Hurry up, Only Few Left !</p>
                <div className="checkLine"></div>
                <div>
                    <p>🔖Fastest Delivery</p>
                    <p>🔖Inclusive of All Taxes</p>
                    <p>🔖Cash On Delivery Available</p>
                </div>
                <div className="extra">
                    <li>
                        <ul>
                            Dealer:<p>Wildcraft</p>
                        </ul>
                        <ul>
                            Brand:<p>{brand}</p>
                        </ul>
                        <ul>
                            Gender:<p>Unisex</p>
                        </ul>
                    </li>
                </div>
                <div className="BtnsDetails">
                    <button onClick={()=> isAuth ? isInCart ? navigate("/CartPage") : addToCartHandler(product): navigate("/login")}>{ isInCart ? "Go to Cart" :"Add To Cart"}</button>
                    <button onClick={()=> isAuth ? isInWish ? navigate("/Wishlist") : addWish(product): navigate("/login")}>{isInWish? "Go to Wish" :"Add to Wishlist"}</button>
                </div>
            </div>
        </div>
        </>
    )
}