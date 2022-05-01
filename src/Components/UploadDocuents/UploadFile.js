import React, { useState } from 'react'
import './UploadFile.css'
import IconChoosenFile from '../../Assets/icons/choosenfile.png';
import { Link } from 'react-router-dom';
const UploadFile = () => {
    const [fileName, setFileName] = useState("non file choosen")
    const handleFileName = (e) => {
        setFileName(e.target.value)
    }
    return (
        <div className='root'>
            <div className='header-image'>
            </div>
            <div className='form-root'>
                <div className='form-block-outside'>
                    <div style={{ display: "flex", justifyContent: "end", padding: "10px 10px 0 0", fontSize: "15px" }}>
                        <span style={{ padding: "10px", cursor: "pointer" }}><Link to="/profile" style={{ textDecoration: "none", color: "black" }}>My Profile</Link></span>
                        <span style={{ padding: "10px", cursor: "pointer" }}><Link to="/logout" style={{ textDecoration: "none", color: "black" }}>Logout</Link></span>
                    </div>
                    <div className='single-div'>
                        <div className='top-tag-outer-border'>
                            <span className='top-tag-inner-border'><span className='top-tag-text'>Upload Page</span></span>
                        </div>
                        <p className='uploadPage-instruction-text'>Please Upload the <span style={{ color: "#00caff", fontWeight: "bold" }}>ECG</span> file to get the diagnosis</p>
                        <div className='choose-file'>
                            {/* <button className='hero-btn'>Upload File</button> */}
                            <label className='uploadPage-hero-btn'>Upload File
                                <input type="file" size="60" onChange={handleFileName} />
                            </label>
                            <span className='choosen-file-name'>{fileName}
                            </span>
                            <img style={{ marginTop: "50px", marginBottom: "10px", width: "150px", height: "150px" }} src={IconChoosenFile} alt="file picture" />
                        </div>
                    </div>
                </div >
            </div>
        </div >
    )
}

export default UploadFile