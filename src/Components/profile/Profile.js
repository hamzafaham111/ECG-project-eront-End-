import React from 'react'
import { Link } from 'react-router-dom'
import './profile.css'
const Profile = () => {
    return (
        <div className='profile-root'>
            <h2 className='profile-heading'>My Profile</h2>
            <form className='profile-form'>
                <div className='name-root'>
                    <div >
                        <label className='input-lable'>First Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label className='input-lable'>Last Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='name-root'>
                    <div>
                        <label className='input-lable'>Hospital</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label className='input-lable'>Job Title</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='name-root'>
                    <div >
                        <label className='input-lable'>email</label>
                        <input type="text" />
                    </div>
                </div>
            </form>
            <div className='profile-btns'>
                <Link to="/forgetpassword"><button className='btns'>Change Password</button></Link>
                <Link to="/uploadfile"><button className='btns'>Back</button></Link>
            </div>
        </div>
    )
}

export default Profile