import React from 'react';
import './style.scss'
import rental1 from '../../Assets/Images/rental1.png'
import classRoomImage from '../../Assets/Images/classroom.svg'
import bathroomImage from '../../Assets/Images/bathroom.svg'
import studentImage from '../../Assets/Images/students.svg'

const RentalCardComponent = ({rentalHeading}) => {
    return(
        <section className='rentalCardComponentSection'>
            <div className='rentalImageWrapper'>
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
                        2 Classrooms
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
                        20 Students per hour
                    </p>

                </div>

            </div>

        </section>
    )

}

export default RentalCardComponent
