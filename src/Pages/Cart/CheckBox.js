import "./Cart.css"
import { UseCommerce } from "../../Context/CommerceContext";
import { ProductNavBar } from "../Product/ProductNavBar";
import { useState } from "react";
import {UpdateAddress} from "./UpdateAddress"

export function CheckBox(){
    const {state} = UseCommerce();
    const [address, setAddress] = useState([])
    const [form, setForm] = useState(false)
    const[edit, setEdit] = useState(null)
    const [list, setList] = useState([{id: 1,
                                    name: "Shabrez",
                                    doorno: "4/5-11",
                                    street: "streetNo-2",
                                    address: "Electronic City, phase1, Banglore",
                                    pincode: "560100",
                                    phno: "9440152021"}]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let id = 1;
    const name = e.target.elements.name.value;
    const DoorNo = e.target.elements.DoorNo.value;
    const street = e.target.elements.street.value;
    const address = e.target.elements.address.value;
    const pincode = e.target.elements.pincode.value;
    const phno = e.target.elements.phno.value;
  
    const listItem = {
        id: id + 1,
      name: name,
      doorno: DoorNo,
      street: street,
      address: address,
      pincode: pincode,
      phno: phno
    };

    setList([...list, listItem]);
    setForm(!form)
  };

  const addNewAddress = () => {
    setForm(!form)
  }

  const clickHandler = (event) => {
    const address = list.find((address) => address?.id === Number(event.target.value));
    setAddress(address)
  }

  const deleteRadio = (e) => {
    const filteredList = list.filter((address) => address?.id !== e.id)
    setList(filteredList)
  }

  const EditRadio = (address) => {
    setEdit(address)
  }

  const handleCancel = () => {
    setEdit(false)
    setForm(!form)
  }

  const handleAddressUpdate = (updatedAddress) => {
    const index = list.findIndex((address) => address.id === updatedAddress.id);
    if (index !== -1) {
      const updatedAddresses = [...list];
      updatedAddresses[index] = updatedAddress;
      setList(updatedAddresses);
      setEdit(null);
    }
  };

  const radioButtons = list.map((address) => (
    <div className="selectAddress">
    <input type="radio" name="address" value={address?.id} onChange={clickHandler}/>
    <span>{address?.name}</span>
    <p style={{marginLeft:"20px"}}>{address?.doorno},{address?.street},{address?.address},{address?.pincode}</p>
    <p style={{marginLeft:"20px"}}>{address?.phno}</p>
    <div className="radioBtns">
    <button className="radioBtn" style={{backgroundColor:"black", color:"white"}} onClick={()=> EditRadio(address)}>Edit</button>
    <button className="radioBtn" onClick={() => deleteRadio(address)}>Delete</button>
    </div>
    {edit && (
        <UpdateAddress list={edit} onUpdate={handleAddressUpdate} cancelFunc={handleCancel} />
      )}
    </div>
  ))

    var TotalPrice =state.cartItems.reduce((acc, curr) => (curr.price*curr.qty) + acc, 0)
    var DiscountPrice = state.cartItems.reduce((acc, curr) => ((curr.originalPrice - curr.price)*curr.qty) + acc, 0)

    return(
        <>
        <ProductNavBar/>
        <h2 className="checkOutheading">Check Out</h2>
        <div className="checkBox">
            <div className="addressBox"> 
                <div>
                    <h4>Delivery Address</h4>
                    <ul>
                    {radioButtons}
                    </ul>
                </div>
                <button onClick={addNewAddress} className="addressBtn">Add New Address</button>
                {form && (
                    <div>
                    <form onSubmit={handleSubmit} className="addressForm">
                    <ul>
                        <h3>Fill The Address Details</h3>
                        <li>
                        <input type="text" name="name" placeholder="Name"/>
                        </li>
                        <li>
                        <input type="text" name="DoorNo" placeholder="Door No"/>
                        </li>    
                        <li>
                        <input type="street" name="street" placeholder="street"/>
                        </li>   
                        <li>
                        <input type="address" name="address" placeholder="address"/>
                        </li>
                        <li>
                        <input type="number" name="pincode" placeholder="pincode"/>
                        </li>
                        <li>
                        <input type="number" name="phno" placeholder="Phone Number"/>
                        </li>
                        <div className="addressbtns">
                        <button type="submit" className="addItem">Add Item</button>
                        <button type="button" className="addItem" onClick={handleCancel}>Cancel</button>
                        </div> 
                    </ul> 
                </form>
                </div>
                )}
            </div>
            <div className="priceCard">
            <div className="checkLine" style={{marginTop:"0.5rem", marginLeft:"1rem"}}></div>
            <h3>Order Details</h3>
            <div className="checkLine" style={{ marginLeft:"1rem"}}></div>
            <div className="itemsList">
                <ul>
                    <li>
                        <h4>Item</h4>
                    </li>
                    {state.cartItems.map((cart) => {
                        return(
                              <li>{cart?.name}</li>
                        )
                    })}
                </ul>
                <ul>
                    <li><h4>Qty</h4></li>
                    {state.cartItems.map((cart) => {
                        return(
                            <li>{cart?.price}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="checkLine" style={{ marginLeft:"1rem"}}></div>
            <div className="pricescheck">
                <h3>Price Details</h3>
                <div className="checkLine" style={{ marginLeft:"1rem"}}></div>
                <div className="itemsList">
                    <ul>
                        <li>Price( {state.cartItems.length} items)</li>
                        <li>Save Amount</li>
                        <li>Delivery Charges</li>
                        <li>Total Amount</li>
                    </ul>
                    <ul>
                        <li>{TotalPrice}</li>
                        <li>{DiscountPrice}</li>
                        <li>FREE</li>
                        <li>{TotalPrice}</li>
                    </ul>
                </div>
                <div className="checkLine" style={{ marginLeft:"1rem"}}></div>
                <div className="AddressBox">
                    <h3>Address Details</h3>
                <div className="checkLine" style={{ marginLeft:"1rem"}}></div>
                {address.length >= 0 ? <h3 style={{color:"red"}}>Please select the Address</h3> :(
                    <div className="finalAddress">
                    <span>{address.name}</span><br/>
                    <span>{address.doorno},{address.street},{address.address},{address.pincode}</span>
                    <br/>
                    <span>{address.phno}</span>
                    </div>)}
                </div>
                <button className="placeOrder">Place the order</button>
            </div>
            </div>

        </div>
        </>
    )
}