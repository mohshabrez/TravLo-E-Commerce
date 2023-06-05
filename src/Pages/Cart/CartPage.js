import "./Cart.css"
import "../Product/product.css"
import { UseCommerce, UseDispatch } from "../../Context/CommerceContext";
import { ProductNavBar } from "../Product/ProductNavBar";
import {ACTIONS} from "../../Reducer/CommerceReducer"
import { UseCart } from "../../Context/CartContext";
import { useNavigate } from "react-router";
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CartPage(){
    const {state} = UseCommerce()
    const {incrementHandler, decrementHandler} = UseCart()
    const{dispatch} = UseDispatch()
    const navigate = useNavigate()


    var TotalPrice =state.cartItems.reduce((acc, curr) => (curr.price*curr.qty) + acc, 0)
    var DiscountPrice = state.cartItems.reduce((acc, curr) => ((curr.originalPrice - curr.price)*curr.qty) + acc, 0)

    const removeFromCart = (cart) => {
        toast.error("Item removed from cart")
        dispatch({
            type:ACTIONS.REMOVEFROMCART,
            payLoad: cart
        })
    }
    const moveCartToWish = (cart) => {
        toast.warning("Item added to Wishlist")
        dispatch({
            type:ACTIONS.ADDWISH,
            payLoad:cart
        })
        dispatch({
            type:ACTIONS.REMOVEFROMCART,
            payLoad:cart
        })
    }


    return(
        <>
        <ProductNavBar/>
        <div className="cartContainer">
        <h1>My Cart ({state.cartItems.length})</h1>
        <div className="cartBox">{
            state.cartItems.length > 0 ? (
            <ul>
                {state.cartItems.map((cart) => {
                    const isInWish = state.wishList.some((wish) => wish?._id === cart?._id)
                    return(
                        <div className="cartDiv">
                            <div className="cartCard">
                                <li>
                                    <img src={cart?.image} alt="cartImage"/>
                                    <div className="cartDetails">
                                        <h4 style={{fontSize:"larger"}}>{cart?.name}</h4>
                                        <p style={{color:"#778899", marginTop:"-15px"}}>Brand - {cart?.brand}</p>
                                        <p style={{fontStyle:"italic", fontWeight:"bold", marginTop:"-10px"}}>₹{cart?.price}</p>
                                        <p style={{fontStyle:"italic", marginTop:"-10px",color:"grey", textDecoration:"line-through"}}>₹{cart?.originalPrice}</p>
                                        <div className="calbtns">
                                        <button disabled={cart?.qty === 1} onClick={()=>decrementHandler(cart)}>-</button><span style={{fontWeight:"bolder", padding:"4px"}}>{cart?.qty}</span><button onClick={()=>incrementHandler(cart)}>+</button>
                                        </div>
                                    </div>
                                    <div className="Cartline"></div>
                                    <div className="cardBtns">
                                    <button className="AtoCart" onClick={()=> removeFromCart(cart)}>REMOVE</button>
                                    <button className="Atowish" onClick={()=> isInWish ? navigate("/Wishlist") :moveCartToWish(cart)}>{isInWish? "Go to Wish" :"Move to Wishlist"}</button>
                                    </div>
                                </li>
                            </div>
                        </div>
                    )
                })}
            </ul>
            ): (<img src="https://cdni.iconscout.com/illustration/premium/preview/empty-cart-2130356-1800917.png?w=0&h=1400" alt="empty cart" className="emptyCart"/>)}
            {state.cartItems.length > 0 ?  (
                <div className="checkoutBox">
                <h2>Price Details</h2>
                <div className="checkLine"></div>
               <div className="checkoutDetails">
                <ul>
                    <li>Price</li>
                    <li>{TotalPrice}</li>
                </ul>
                <ul>
                    <li>Discount</li>
                    <li style={{marginLeft:"-1.6rem"}}>-{DiscountPrice}</li>
                </ul>
                <ul>
                    <li>Delivery Charges</li>
                    <li style={{marginLeft:"-1.1rem"}}>FREE</li>
                </ul>
                <div className="checkLine" style={{ width: "130%", marginLeft:"-2.2rem"}}></div>
                <ul>
                    <li><h3>Total Amount</h3></li>
                    <li style={{marginLeft:"-2.3rem"}}><h3>₹{TotalPrice}</h3></li>
                </ul>
                <div className="checkLine" style={{ width: "130%", marginLeft:"-2.2rem"}}></div>
                <p style={{fontWeight:"bold", color:"green"}}>You will save ₹{DiscountPrice} on this order </p>
                <Link to="/checkbox"><button className="checkOut">Check Out</button></Link>
            </div>
            </div>

            ) : (
            <h1 className="emptyCartTitle">Your cart is Empty</h1>)}
            
</div>
</div>
        </>
       
    )
}

