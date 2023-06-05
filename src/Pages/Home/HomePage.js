import "./Home.css"
import { RootLayout } from "./RootLayout";
import { useState } from "react";
import footware from "../../Images/footwear-b_1.webp"
import gear from "../../Images/gear-b_1.webp"
import rainwear from "../../Images/rainwear-b.webp"
import { UseCommerce, UseDispatch } from "../../Context/CommerceContext";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import {ACTIONS} from "../../Reducer/CommerceReducer"

export function HomePage(){
    const {categories, loadingState} = UseCommerce()
    const {dispatch} = UseDispatch()
    const Images=[footware, gear, rainwear]
    const[count, setCount] = useState(0);
    const [img, setImg] = useState(Images[count]);
    const [gridColumn, setGridSpan] = useState("2/8");
    

    const getCategory = (category) => {
        if(category?.categoryName === "BEST SELLERS"){
            dispatch({
                type:ACTIONS.BESTSELLERS,
                payLoad: "Best Sellers"
            })
        }
        else{
            console.log('false')
        } 
    }

    const nextSlide = () => {
        count < 2 ? setCount((prev) => prev +1 ): setCount(0);
        setImg(Images[count])
        count === 2 ? setGridSpan("10/16"): setGridSpan("2/8")
    }
    const prevSlide = () => {
        count > 0 ? setCount((prev) => prev - 1) : setCount(2);
        count === 2
          ? setGridSpan("10/16")
          : setGridSpan("2/8");
        setImg(Images[count]);
      };

    return(
        <>
    <div className="HomePage">
        <RootLayout/>
        <div className="main">
            <div className="wrapper" >
            <span className="prev"  onClick={prevSlide} >&#10094;</span>
                <div className="image-container" style={{gridColumn}}>
                    <div className="Homeimage">
                        <Link to="/ProductPage"><img src={img} alt="Home Images"/></Link>
                    </div>   
                </div>
            <span className="next"  onClick={nextSlide}>&#10095;</span>
            </div>
            <div className="categorized">
                <h1>Explore our Categories</h1>
                <ul>
                    {categories.map((category) => {
                        return(
                            <li key={category?._id}>
                               <Link to="/ProductPage" style={{textDecoration:"none"}}><div className="categoryCard" onClick={()=>getCategory(category)}>
                                    <h3 style={{color:"whitesmoke"}}>{category?.categoryName}</h3>
                                    <img src={category?.image} alt="categorizedData"/>
                                    <Link className="categoryLink" style={{color: "whitesmoke", fontWeight:"bolder", padding:"20px"}}>See More</Link>
                                </div></Link> 
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Footer/>
        </div>
    </div>
</>
   
    )
}