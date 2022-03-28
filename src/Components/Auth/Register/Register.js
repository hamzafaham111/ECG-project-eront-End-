import React from 'react'
import './Register.css'
import IconFirstName from '../../../Assets/icons/firstname.png'
import IconEmail from '../../../Assets/icons/email.png'
import IconUserName from '../../../Assets/icons/username.png'
import IconPassword from '../../../Assets/icons/password.png'
import IconHospital from '../../../Assets/icons/hospital.png'
import IconJobTitle from '../../../Assets/icons/jobtitle.png'
import IconChooseFile from '../../../Assets/icons/choosefile.png'
import { Link } from 'react-router-dom'
import IconUpload from '../../../Assets/icons/upload.png'

const Register = () => {
    return (
        <form>
            <p className='instruction-text'>Please fill in the following information to have access to our system</p>
            <div className='inputs-div'>
                <div className='input-div' >
                    <lable className='register-input-label'>First Name:</lable>
                    <div className='register-input-root'>
                        <img className='register-input-icon' src={IconFirstName} alt="icon" />
                        <input className='register-input' type="text" placeholder="first name" />
                    </div>
                </div>
                <div className='input-div' >
                    <lable className='register-input-label'>Last Name:</lable>
                    <div className='register-input-root'>
                        <img className='register-input-icon' src={IconFirstName} alt="icon" />
                        <input className='register-input' type="text" placeholder="last name" />
                    </div>
                </div>
                <div className='input-div' >
                    <lable className='register-input-label'>Email:</lable>
                    <div className='register-input-root'>
                        <img className='register-input-icon' src={IconEmail} alt="icon" />
                        <input className='register-input' type="text" placeholder="email" />
                    </div>
                </div>
                <div className='input-div' >
                    <lable className='register-input-label'>Username:</lable>
                    <div className='register-input-root'>
                        <img className='register-input-icon' src={IconUserName} alt="icon" />
                        <input className='register-input' type="text" placeholder="username" />
                    </div>
                </div>
                <div className='input-div' >
                    <lable className='register-input-label'>Password:</lable>
                    <div className='register-input-root' >
                        <img className='register-input-icon' src={IconPassword} alt="icon" />
                        <input className='register-input' type="text" placeholder="password" />
                    </div>
                </div>
                <div className='input-div' >
                    <lable className='register-input-label'>Hospital:</lable>
                    <div className='register-input-root'>
                        <img className='register-input-icon' src={IconHospital} alt="icon" />
                        <select className='register-input'>
                            <option >Select</option>
                            <option >Bacha Khan Medical complex</option>
                            <option >Shokat Khanam MRC</option>
                        </select>
                    </div>
                </div>
                <div className='input-div' >
                    <lable className='register-input-label'>Job Title:</lable>
                    <div className='register-input-root'>
                        <img className='register-input-icon' src={IconJobTitle} alt="icon" />
                        <input className='register-input' type="text" placeholder="job title" />
                    </div>
                </div>
                <div className='input-div' >
                    <lable className='register-input-label'>Approval:</lable>
                    <div className='register-input-root'>
                        {/* <img className='register-input-icon' src={IconChooseFile} alt="icon" />
                        <input className='register-input' type="file" placeholder="choose a file" />
                        <img src={IconUpload} alt="icon" /> */}
                        <label style={{ width: "100%", display: "flex", alignItems: "center" }}>
                            <img className='register-input-icon' src={IconChooseFile} alt="icon" />
                            <span className='register-upload-text'>Choose a file</span>
                            <input type="file" />
                            <img src={IconUpload} alt="icon" className='register-input-icon-upload' style={{}} />
                        </label>
                    </div>
                </div>
            </div>
            <div className='form-btn-div' style={{}}>
                <Link to="uploadfile"><button className='form-btn'>REGISTER</button></Link>
            </div>
            <p className='instruction-text'>After submission you will receive an email
                indicating your registration request status.</p>
        </form>
    )
}

export default Register