import React from 'react';
import './style.scss'
import RentalCardComponent from "../../Components/RentalCardComponent";
import CompleteFormSectionComponent from "../../Components/CompleteFormSectionComponent";
import rental1 from '../../Assets/Images/rental1.png'
import rental2 from '../../Assets/Images/rental2.png'
import rental3 from '../../Assets/Images/rental3.png'
import sliderImage from '../../Assets/Images/slideImage.png'
import ToggleComponent from "../../Components/ToggleComponent";
const LandingPageScreen = () => {
    return(
        <div>
        <div className='landingMainOuterWrapper'>
            <div className='landingBannerContentWrapper'>
                <p>
                    Building homeschool communities
                </p>
                <h3>DRIVING  <span> CHANGE </span>  IN <span> EDUCATION </span></h3>

            </div>



            <div className='sliderToggleWrapper'>
                <div className='toggleCoupleFlex'>
                <div>
                    <ToggleComponent detail={'I advocate for homeschool communities'} />
                </div>
                <div>
                    <ToggleComponent detail={'I want this in my existing community'} />
                </div>
                <div>
                    <ToggleComponent detail={'I want to build this'} />
                </div>
                </div>
                <div className='centerSlideImageWrapper'>
                    <img src={sliderImage} alt=""/>
                </div>
                <div className='toggleCoupleFlex'>
                <div>
                    <ToggleComponent detail={'I want to live here'} />
                </div>
                <div>
                    <ToggleComponent detail={'I want to serve here'} />
                </div>
                <div>
                    <ToggleComponent detail={'I will tell my clients about it'} />
                </div>
                </div>

            </div>

        </div>

        {/*    Featured Rental Section*/}

            <section className='featuredRentalSectionWrapper'>

                <div className='featuredRentalContentWrapper'>

                    <h2>
                        Featured Rentals
                    </h2>
                    <p>
                        Visit some of our best properties selected just for you
                    </p>

                </div>

                <div className='rentalCardsFlexWrapper'>
                    <RentalCardComponent imageRental={rental1} rentalHeading={'Westlake #6 | Art House'} />

                    <RentalCardComponent imageRental={rental2} rentalHeading={'Westlake #15 | Science House'} />

                    <RentalCardComponent imageRental={rental3} rentalHeading={'Westlake #61 | Math House'} />

                </div>


            </section>



            <section>
                <CompleteFormSectionComponent />
            </section>


        </div>
    )

}

export default LandingPageScreen
