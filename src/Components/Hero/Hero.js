import React from 'react'
import './Hero.css';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className='hero-root'>
            <div className='hero-content'>
                <div className='content'>
                    <span className='line-one'>Welcome To Artificial</span>
                    <span className='line-two'>Intelligence-enabled</span>
                    <span className='line-three'><span className='ecg-color'>ECG </span>System</span>
                </div>
                <Link to='register'><button className='hero-btn'>START</button></Link>
            </div>
        </div>
    )
}

export default Hero