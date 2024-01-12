import React from 'react'
import Growimgtogether from "../../View/Employee/Growimgtogether";
import Profileactivity from "../../View/Employee/Profileactivity";

function Onboarding() {
    return (
        <div className='container-fluid'>
            <div className='Onboarding_page'>
                <Growimgtogether />

                <div className='row'>
                    <div className='col-md-8 col-12'>
                        <Profileactivity />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onboarding