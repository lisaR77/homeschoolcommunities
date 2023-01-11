import React from 'react';
import './style.scss'

import classRoomImage from '../../Assets/Images/classroom.svg'
import bathroomImage from '../../Assets/Images/bathroom.svg'
import studentImage from '../../Assets/Images/students.svg'

const RentalCardComponent = ({rentalHeading, imageRental}) => {
    return(
        <section className='rentalCardComponentSection' >
            <div className={`rentalImageWrapper`}  style={{backgroundImage: `url(${imageRental})`}}>
               <p>
                   Concept
               </p>

            </div>

            <div className='rentalCardHeading'>
                <p>
                    {rentalHeading}
                </p>


            </div>
            <div className='rentalDetailsWrapper'>
                <div className='rentalDetailContentWrapper'>
                    <img src={classRoomImage} alt=""/>
                    <p>
                        7 Classrooms
                    </p>

                </div>
                <div className='rentalDetailContentWrapper'>
                    <img src={bathroomImage} alt=""/>
                    <p>
                        5 Bathrooms
                    </p>

                </div>
                <div className='rentalDetailContentWrapper'>
                    <img src={studentImage} alt=""/>
                    <p>
                        45 Students <br/> per hour
                    </p>

                </div>

            </div>

        </section>
    )

}

export default RentalCardComponent
