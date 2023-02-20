import React from 'react';
import './style.scss'
import logoImage from '../../Assets/Images/logo.png'
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className='headerMainOuterWrapper'>
            <div className='logoImageWrapper'>
                <Link to={'/'} className={'linkReadMore'}>
                <img src={logoImage} alt=""/>
                </Link>
            </div>

        </div>
    )

}

export default Header
