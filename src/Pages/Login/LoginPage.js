import "./login.css"
import travel from "../../Images/travel.gif"
import backpack from "../../Images/backpack.gif"
import { Link } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom";
import { UseAuth } from "../../Context/AuthContext";
import profile from "../../Images/resume.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function LoginPage(){
  const {setCredentials, email, setMail, setPassword, password, isAuth, setAuth,data} = UseAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (e) => {
    setCredentials(e);
    if (isAuth) navigate(location?.state?.from?.pathname)
    
  };
  const logoutClick = () => {
    toast.error("Logged Out!!!")
    localStorage.removeItem("token");
    setAuth(false);
  }
    return(
        <>
        <div className="loginPage">
            <div className="logoset">
                <Link to="/HomePage">
                <h1>TrAvLo.Co</h1>
                <img src={travel} alt="travelimg"/>
                <img src={backpack} alt="backpack"/>
                </Link>
            </div>
            {isAuth ? (
            <div className="loggedinCard">
                <div className="profileDetails">
                    <img src={profile} alt="Profile"/>
                        <div>
                            <h3>Profile Details</h3>
                        <div className="checkLine" style={{ marginLeft:"1rem"}}></div>
                            <ul>
                                <li>Name:    {data.name}</li>
                            </ul>
                            <ul>
                                <li>Email:    {data.email}</li>
                            </ul>
                        <div className="checkLine" style={{ marginLeft:"1rem"}}></div>
                        </div>
                    <h2>You have been Logged In!!!</h2>
                    <h4>You can access Cart, WishList, and more stuff..</h4>
                    <h4>Click on Logo !!! To Move to HomePage</h4>
                    <button onClick={logoutClick}>Log out</button>
                    
                </div>
            </div>
            ) : (
            <div className="loginCard">
                <h1 style={{color:"rgb(13, 201, 230)"}}>SIGN IN</h1>
                <div className="formLoginData">
                <form>
                    <div>
                        <label> Enter Your Email Address *</label>
                        <input type="text" placeholder="adarshbalika@gmail.com" name="Email" value={email} onChange={(e) => setMail(e.target.value)}/>
                    </div>
                    <div>
                        <label> Enter Your Password *</label>
                        <input type="password" className="pwd" placeholder="********" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" value="Sign In" className="btn primary" onClick={handleClick}>Sign In</button>
                    <button type="submit" value="Test User" className="btn primary" onClick={handleClick}>Login With Test Credentials</button>
                    
                    <p style={{marginLeft:"20px"}}>Don't have an Account?<Link to="/SignUp">  Sign Up</Link></p>
                </form>
                </div>
            </div>
            )}
        </div>
        </>
    )
}