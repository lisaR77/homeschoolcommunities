import React from 'react'
import './style.scss'
import hrImg from '../../Assets/Images/hrLine.svg'
import targetImage from '../../Assets/Images/targetImage.png'


const FriendlyCardComponent = ({phase, address, project}) => {
    return(
        <div className='friendlyCardWrapperStyle'>
            <div className='friendlyTopWrapper'>
                <h3>
                    {phase}
                </h3>
                <p>
                    {project}
                </p>

                <img src={hrImg} alt=""/>

            </div>
            <div className='friendlyCenterWrapper'>
                <span>
                   ONE new
                </span>
                <span className='campusFriendlyHeading'>
                    HOMESCHOOL CAMPUS
                </span>
                <span>
                    in
                </span>

                <p className='campusAddressFriendly'>
                    {address}
                </p>

            </div>

            <div className='targetImageWrapper'>
                <img src={targetImage} alt=""/>

            </div>


            <div className='friendlyButtonWrapper'>

                    $ TBD


            </div>

        </div>
    )

}
export default FriendlyCardComponent
