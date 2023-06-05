import "./signup.css"
import Traveller from "../../Images/traveler.gif"
import passport from "../../Images/passport.gif"
import {Link} from "react-router-dom"
import { UseAuth } from "../../Context/AuthContext"

export function SignUp(){
    const {registerUser, email, password, setMail, setPassword} = UseAuth();    
    return(
        <>
        <div className="signUp">
            <div className="singuplogo">
                <h1>TrAvLo.Co</h1>
                <h3>Looks like you're new here! Sign up with your email to get started</h3>
                <img src={passport} alt="travelImg"/>
                <img src={Traveller} alt="passport"/>
            </div>
            <div className="signupForm">
                <h1>Sign Up</h1>
                <div className="formLoginData">
                    <form>
                        <div>
                            <label>Enter Your Name</label>
                            <input type="text" placeholder="UserName"/>
                        </div>
                        <div>
                            <label>Enter Your Email</label>
                            <input type="text" placeholder="test@gmail.com" value={email} onChange={(e) => setMail(e.target.value)}/>
                        </div>
                        <div>
                            <label>Enter Your Password</label>
                            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <label>Confrim Password Again</label>
                            <input type="password" placeholder="Confirm Password" />
                        </div>
                        <button style={{marginLeft:"40px"}} value="Sign Up" onClick={e => registerUser(e)}>Create a New Account</button>
                        <p style={{marginLeft:"30px"}}>Already have an Account<Link to="/login">  Sign In</Link></p>
                    </form>

                </div>
            </div>
        </div>
        </>
    )
}