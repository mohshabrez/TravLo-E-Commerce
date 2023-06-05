import "./wish.css"
import { UseCommerce, UseDispatch } from "../../Context/CommerceContext";
import { ProductNavBar } from "../Product/ProductNavBar";
import { ACTIONS } from "../../Reducer/CommerceReducer";
import { UseCart } from "../../Context/CartContext";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Wishlist(){
    const {state} = UseCommerce()
    const {dispatch} = UseDispatch()
    const {addToCartHandler} = UseCart()
    const navigate = useNavigate()
    const removeFromWish = (wishproduct) => {
        toast.error("Item removed from wishlist")
        dispatch({
            type:ACTIONS.REMOVEFROMWISH,
            payLoad: wishproduct
        })
    }
    return(
        <>
        <ProductNavBar/>
        <div className="WishList"> 
            <div className="WishlistItems">
                {state.wishList && (
                    <>
                    <h1>My WishList</h1>
                    {state.wishList.length > 0 ?(
                    <ul>
                        {state.wishList.map((wishproduct) => {
                            const isInCart = state.cartItems.some((cart) => cart?._id === wishproduct?._id)
                            return(
                                <div className="wishCard">
                                <img className="wishImg" src={wishproduct?.image} alt="wishlist images"/>
                                <div className="wishDetails">
                                    <h3>{wishproduct?.name}</h3>
                                    <p style={{marginTop:"-20px"}}>{wishproduct?.brand}</p>
                                    <p>₹{wishproduct?.price}</p>
                                    <p style={{marginTop:"-35px", marginLeft:"50px",textDecoration:"line-through"}}>(₹{wishproduct?.originalPrice})</p>
                                    <span className="material-symbols-outlined" style={{marginTop:"-120px", marginRight:"-5px"}} onClick={() => removeFromWish(wishproduct)}>close</span>
                                    <button className="wishBtn" onClick={()=> isInCart ? navigate("/CartPage") : addToCartHandler(wishproduct)}>{ isInCart ? "Go to Cart" :"Add To Cart"}</button>
                                </div>
                                </div>)
                        })}
                    </ul>
                    ) : <img className="emptywishImg" src="https://th.bing.com/th/id/OIP.gn99fIyj918A9IUVwOiCagAAAA?pid=ImgDet&rs=1" alt="wishlist empty" style={{cursor:"none", caretColor: "transparent"}}/>}
                    </>
                )}
            </div>
        </div>
        </>
    )
}