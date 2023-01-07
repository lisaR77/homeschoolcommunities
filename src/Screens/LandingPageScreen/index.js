import React from 'react';
import './style.scss'
import RentalCardComponent from "../../Components/RentalCardComponent";
import CompleteFormSectionComponent from "../../Components/CompleteFormSectionComponent";

const LandingPageScreen = () => {
    return(
        <div>
        <div className='landingMainOuterWrapper'>
            <div className='landingBannerContentWrapper'>
                <p>
                    Building homeschool communities
                </p>
                <h3>THE <span> WAY </span> OF THE <span> FUTURE </span></h3>

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
                    <RentalCardComponent rentalHeading={'Westlake #6 | Art House'} />

                    <RentalCardComponent rentalHeading={'Westlake #15 | Science House'} />

                    <RentalCardComponent rentalHeading={'Westlake #61 | Math House'} />

                </div>


            </section>



            <section>
                <CompleteFormSectionComponent />
            </section>


        </div>
    )

}

export default LandingPageScreen
