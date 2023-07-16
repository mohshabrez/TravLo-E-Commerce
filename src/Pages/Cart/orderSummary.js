import "./Cart.css"
import "../Product/product.css"
import { UseCommerce } from "../../Context/CommerceContext";
import { ProductNavBar } from "../Product/ProductNavBar";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function OrderSummary(){
    const {state} = UseCommerce()

    return(
        <>
        <ProductNavBar/>
        {toast.success("Order Placed successfully")}
        <div className="orderContainer">
        <h1>Order Summary</h1>
        <div className="orderSummary">
            <h3>Payment Id:<span style={{color:"green", margin:"10px"}}>{state.OrderSummary.id}</span></h3>
            <h3>Total Amount: <span style={{color:"green", margin:"10px"}}>{state.OrderSummary.totalPrice}</span></h3>
            <h3>Order will be delivered in 2 Days on given address</h3>
        </div> 
        <div className="orderItems">
        <ul>
                        {state.OrderSummary.items.map((wishproduct) => {
                            return(
                                <div className="wishCard">
                                <img className="wishImg" src={wishproduct?.image} alt="wishlist images"/>
                                <div className="wishDetails">
                                    <h3>{wishproduct?.name}</h3>
                                    <p style={{marginTop:"-20px"}}>{wishproduct?.brand}</p>
                                    <p>₹{wishproduct?.price}</p>
                                    <p style={{marginTop:"-35px", marginLeft:"50px",textDecoration:"line-through"}}>(₹{wishproduct?.originalPrice})</p>
                                </div>
                                </div>)
                        })}
                    </ul>
        </div>
</div>
        </>
       
    )
}

