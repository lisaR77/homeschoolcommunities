import React from 'react';
import './style.scss'
import westleImage from '../../Assets/Images/westleImage.png'
import {MdLocationOn} from "react-icons/md";


const WestleCardComponent = ({heading,center, image}) => {
    return(
        <div className={`westleCardWrapper ${center === 'yes' ? 'centerWrap' : null}`}>
            <p className='westleCardHeading'>
                {heading}
            </p>


            <div className='westleFooterConentWrapper'>
                <div className='westleImageWrapper'>
                    <img src={image} alt=""/>

                </div>
                <div className={`westleWhiteWrapper ${center === 'yes' ? 'centerWrapWhite' : null}`}>

                <div className='classesCotentWrapper'>
                    <p>
                        0 Classes
                    </p>
                    <span>
                        .
                    </span>

                    <p>
                        0 Students
                    </p>
                    <span>
                        .
                    </span>
                    <p>
                        0 Location
                    </p>
                </div>
               <div className='locationWrapper'>
                   <MdLocationOn color={'#6D767E'} size={18} />

                   <p>
                       Eagle Mountain, Utah
                   </p>

               </div>
                </div>
            </div>


        </div>
    )

}

export default WestleCardComponent
