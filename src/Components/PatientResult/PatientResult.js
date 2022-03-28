import React from 'react'
import './PatientResult.css';
const PatientResult = () => {
    return (
        <div className='p-result-root'>
            <div className='p-result-header-image'>
            </div>
            <div className='p-result-form-root'>
                <div className='p-result-form-block-outside'>
                    <div className='p-result-single-div'>
                        <div className='p-result-top-tag-outer-border'>
                            <span className='p-result-top-tag-inner-border'><span className='p-result-top-tag-text'>Upload Page</span></span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <span style={{ fontSize: "14px", color: "#585252", marginBottom: "5px", fontWeight: "500" }}>Patient Result</span>
                            <div style={{ background: "#F8F8F8", width: "100%", height: "50px" }}></div>
                        </div>
                    </div>
                </div >
            </div>
        </div >
    )
}

export default PatientResult