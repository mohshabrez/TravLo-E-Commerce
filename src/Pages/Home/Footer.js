import "./Home.css"
import github from "../../Images/github.png"
import linkedin from "../../Images/linkedin.png"
import insta from "../../Images/insta.png"
import whtsapp from "../../Images/whtsapp.png"
import twitter from "../../Images/twitter.png"
export function Footer(){
    return(
        <>
        <div className="footer">
            <h2>TrAvLo.Co</h2>
            <p>Shop easily Trekkers and Travel Freaks</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>© 2023 TrAvLo.Co</p>
        </div>
         <div className="socialLinks">
            <a href="https://github.com/mohshabrez"><img src={github} alt="Github"/></a>
            <a href="https://www.linkedin.com/in/g-shabrez-785362159/"><img src={linkedin} alt="linkedin"/></a>
            <img src={insta} alt="InstaGram"/>
            <img src={whtsapp} alt="Whatsapp"/>
            <img src={twitter} alt="Twitter"/>
        </div>
        </>
        
    )
}