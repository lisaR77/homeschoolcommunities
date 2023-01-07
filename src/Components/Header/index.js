import React from 'react';
import './style.scss'
import logoImage from '../../Assets/Images/logo.png'

const Header = () => {
    return(
        <div className='headerMainOuterWrapper'>
            <div className='logoImageWrapper'>
                <img src={logoImage} alt=""/>
            </div>

        </div>
    )

}

export default Header
