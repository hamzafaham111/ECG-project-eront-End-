import React, { useState } from 'react'
import './logout.css'
import { CheckCircleOutlined } from '@mui/icons-material'
const Logout = () => {

    return (
        <div className='root'>
            <div className='header-image'>
            </div>
            <div className='form-root'>
                <div className='form-block-outside'>
                    <div className='single-div-logout'>
                        <CheckCircleOutlined style={{ fontSize: "150px" }} className="check-circle-icon" />
                        <p>you shave successfully logged out</p>
                        <span>Thanks for using our system</span>
                    </div>
                </div>
            </div >

        </div >
    )
}

export default Logout