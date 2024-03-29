import React from 'react'
import './SignIn.css'
import IconUserName from '../../../Assets/icons/username.png'
import IconPassword from '../../../Assets/icons/password.png'
import { Link } from 'react-router-dom'
const SignIn = () => {
    return (
        <form>
            <p className='instruction-text'>Please fill in the fallowing information to sign in</p>
            <div className='inputs-div'>
                <div className='input-div' >
                    <lable className='signin-input-label'>Username:</lable>
                    <div className='signin-input-root'>
                        <img className='signin-input-icon' src={IconUserName} />
                        <input className='signin-input' type="text" placeholder="username" />
                    </div>
                </div>
                <div className='input-div' >
                    <lable className='signin-input-label'>Password:</lable>
                    <div className='signin-input-root' >
                        <img className='signin-input-icon' src={IconPassword} />
                        <input className='signin-input' type="text" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className='form-btn-div' style={{}}>
                <button className='form-btn'>SIGN-IN</button>
            </div>
            <div className='forgit-password-div'>
                <span style={{ marginRight: "5px" }}>Forgit password?</span>
                <Link to="/forgetpassword" style={{ textDecoration: "none" }}>Click HERE</Link>
            </div>
        </form>
    )
}

export default SignIn