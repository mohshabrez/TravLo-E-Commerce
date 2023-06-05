import "./productNav.css"
import React, { useState }  from "react"
import { NavLink } from "react-router-dom"
import { UseCommerce } from "../../Context/CommerceContext"


export function ProductNavBar(){
    const {state} = UseCommerce()
    const[menu,setMenu] = useState(false)
    const humBurger = () => {
        setMenu(!menu)
    }
    return(
        <>
    <div className="ProductNavBar">
        <div className="productslib">
            <nav className="prodnavBar">
                <NavLink className="prodlogoNameNav" to="/HomePage">TrAvLo.Co</NavLink>
            <section className="prodnavIcons">
            <NavLink to="/HomePage"><i class="active"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg></i></NavLink>
            <NavLink to="/ProductPage"><i><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg></i></NavLink>
            <NavLink to="/CartPage" style={{textDecoration:"none"}}><i><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg></i><span>{state.cartItems.length}</span></NavLink>
            <NavLink to="/Wishlist" style={{textDecoration:"none"}}><i><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></i><span>{state.wishList.length}</span></NavLink>
            <NavLink to="/login"><i><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg></i></NavLink>
            </section>
            </nav>
            <section className="prodsearchSection">
                <NavLink to="/SearchBar">
                <input className="prodsearchBar" placeHolder="Search by product Name"/></NavLink>
                <button className="prodsearch-btn" >Search</button>
            </section>
        </div>
    </div>
    <div className="prodhumBurger">
    <NavLink className="logoNameNavv" to="/HomePage">TrAvLo.Co</NavLink>
    <span className="humBurgersize" onClick={humBurger}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Hamburger"><g fill="#595bd4" class="color1c1c1c svgShape"><path d="M1 8h30a1 1 0 000-2H1a1 1 0 000 2zM31 15H1a1 1 0 000 2h30a1 1 0 000-2zM31 24H1a1 1 0 000 2h30a1 1 0 000-2z" fill="#fe9526" class="color000000 svgShape"></path></g></svg></span>
        <NavLink  className="searchhumBurger" to="/SearchBar"><input className="searchBarin" placeHolder="🔍 Search"/></NavLink>
{menu ? (
    <>
    <nav className="prodnavBar">
    <section className="prodnavIconsin">
        <NavLink to="/HomePage"><i class="active"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg></i></NavLink>
        <NavLink to="/ProductPage"><i><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg></i></NavLink>
        <NavLink to="/CartPage" style={{textDecoration:"none"}} ><i><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg></i><span>{state.cartItems.length}</span></NavLink>
        <NavLink to="/Wishlist" style={{textDecoration:"none"}}><i><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></i><span>{state.wishList.length}</span></NavLink>
        <NavLink to="/login"><i><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg></i></NavLink>
    </section>
    </nav>
    </>
):""
}
</div>
</>
    )
}