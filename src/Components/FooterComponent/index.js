import React from 'react';
import './style.scss'
import footerLogoImage from '../../Assets/Images/footerImage.png'
import {FaEnvelope } from 'react-icons/fa'
import {ImPhone } from 'react-icons/im'

const FooterComponent = () => {
    return(
        <div className='footerMainOuterWrapper'>
            <div className='footerLogoImageWrapper'>
                <img src={footerLogoImage} alt=""/>
            </div>

            <div className='footerContentWrapper'>
                <h2>
                    Contact
                </h2>

                <div className='footerContentPointerWrapper'>
                    <div className='footerIconWrapper'>
                        <ImPhone size={22} />
                        <p>
                            +801 - 941-2815
                        </p>

                    </div>
                    <div className='footerIconWrapper'>
                        <FaEnvelope size={22} />
                        <p>
                            hautestyle@gmail.com
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )

}

export default FooterComponent
