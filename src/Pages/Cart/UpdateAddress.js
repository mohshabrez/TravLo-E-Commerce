import React from "react";
import { useState } from "react";


export function UpdateAddress({ list, onUpdate, cancelFunc }){
    const[name, setName] = useState(list.name)
    const[Doorno, setDoorno] = useState(list.doorno)
    const [street, setStreet] = useState(list.street);
    const [pincode, setPincode] = useState(list.pincode);
    const [address, setAddress] = useState(list.address);
    const [phno, setPhno] = useState(list.phno);


    const cancelEdit = () => {
        cancelFunc()
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedAddress = {
          id: list.id,
          name:name,
          doorno:Doorno, 
          street:street,
          pincode:pincode,
          address:address,
          phno:phno  
        };
        
        onUpdate(updatedAddress);
      };

    return(
        <div>
            <form onSubmit={handleSubmit} className="addressForm">
                <ul>
                    <h3>Edit Address Details</h3>
                        <li>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                        </li>
                        <li>
                        <input type="text" name="DoorNo" placeholder="Door No" value={Doorno}  onChange={(e)=> setDoorno(e.target.value)}/>
                        </li>    
                        <li>
                        <input type="street" name="street" placeholder="street" value={street}  onChange={(e)=> setStreet(e.target.value)}/>
                        </li>   
                        <li>
                        <input type="address" name="address" placeholder="address" value={address}  onChange={(e)=> setAddress(e.target.value)}/>
                        </li>
                        <li>
                        <input type="number" name="pincode" placeholder="pincode" value={pincode}  onChange={(e)=> setPincode(e.target.value)}/>
                        </li>
                        <li>
                        <input type="number" name="phno" placeholder="Phone Number" value={phno}  onChange={(e)=> setPhno(e.target.value)}/>
                        </li> 
                        <div className="addressbtns">
                        <button type="submit" className="addItem">Save</button>
                        <button onClick={cancelEdit} className="addItem">Cancel</button>
                        </div>
                    </ul> 
                </form>
                </div>
    )
}