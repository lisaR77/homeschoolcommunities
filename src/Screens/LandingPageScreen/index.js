import React from 'react';
import './style.scss'
import RentalCardComponent from "../../Components/RentalCardComponent";
import CompleteFormSectionComponent from "../../Components/CompleteFormSectionComponent";
import rental1 from '../../Assets/Images/rental1.png'
import rental2 from '../../Assets/Images/rental2.png'
import rental3 from '../../Assets/Images/rental3.png'
import sliderImage from '../../Assets/Images/slideImage.png'
import ToggleComponent from "../../Components/ToggleComponent";
import LivingComponent from "../../Components/LivingComponent";
import resourcesImage from '../../Assets/Images/resources.png'
import handIconImage from '../../Assets/Images/handIcon.png'
import personImage from '../../Assets/Images/person.png'
import familyIconImage from '../../Assets/Images/familyIcon.png'
import clubhouseImage from '../../Assets/Images/clubhouse.png'
import campusImage from '../../Assets/Images/campus.png'
import buildFutureText from '../../Assets/Images/buildFutureText.png'
import buildEmpty from '../../Assets/Images/buildEmpty.png'
import IntoBlank from '../../Assets/Images/IntoBlank.png'
import IntoFutureText from '../../Assets/Images/IntoFutureText.png'
import westleImage from '../../Assets/Images/westleImage.png'
import {Col, Row} from "antd";
import WestleCardComponent from "../../Components/WestleCardComponent";
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
                    <ToggleComponent name={'homeschool_communities'} detail={'I advocate for homeschool communities'} />
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




            {/*westle home scool section start*/}

            <section className='westleHomeSectionWrapper'>
                <WestleCardComponent heading={'TBD'} center={'none'} image={buildFutureText} />
                <WestleCardComponent heading={'Westlake Homeschool'} center={'yes'} image={westleImage} />
                <WestleCardComponent heading={'TBD'} center={'none'} image={IntoFutureText} />

            </section>




            {/* Living Section Start   */}
            <section className='livingSectionWrapper'>
                <h3>
                    What Living In A Homeschool Community Means
                </h3>

                <div className='livingComponentWrapperMain'>
                    <LivingComponent detail={'Resources to homeschool your children in a safely gated community and access to school amenities provided in the clubhouse'} image={resourcesImage} />
                    <LivingComponent detail={'Open a class and teach a skill out of your home OR, rent your home out to homeschool groups'} image={handIconImage} />
                    <LivingComponent  detail={'Grade 7-12 class electives assisted by certified teachers (optional package)'} image={personImage} />
                    <LivingComponent  detail={'Families build their own curriculums'} image={familyIconImage} />
                </div>






            </section>

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



            {/* Club Section Start   */}
            <section className='clubSectionWrapper'>

                <Row>
                    <Col lg={10} md={24} sm={24} xs={24}>
                        <div className='clubContentMainWrapper'>
                            <h3>
                                Clubhouse & Campus Grounds
                            </h3>
                            <div className='listsClubsWrapper'>
                                <ul>
                                    <li>
                                        Reserve the Auditorium & Science Lab
                                    </li>
                                    <li>Access to the Library Bookstore, Football, Track, & Soccer fields</li>
                                    <li>Enjoy campus grounds with your family</li>
                                    <li>No parking issues with our zoning ordinance</li>
                                    <li>Onsite teacher patrons to assist families</li>
                                    <li>Amazing Parent Workshops </li>
                                    <li>Dinners supplied to families for busy moms</li>
                                    <li>In a secure, gated community.</li>
                                </ul>

                            </div>


                            <div className='campusStyleWrapper'>
                                <div className='campusImageStyle'>
                                    <img src={campusImage} alt=""/>

                                </div>
                                <div className='campusContentWrapper'>
                                    <h4>
                                        Up to 10 family members per year package deals offered
                                    </h4>
                                    <p>
                                        *Monthly Membership fees not included. Residents pay into monthly membership fees plus HOA fees
                                    </p>

                                </div>

                            </div>

                        </div>

                    </Col>
                    <Col lg={14} md={24} sm={24} xs={24}>
                        <div className='clubImageWrapper'>
                            <img src={clubhouseImage} alt=""/>

                        </div>

                    </Col>
                </Row>

            </section>




            {/*Form Section start*/}
            <section>
                <CompleteFormSectionComponent />
            </section>






        </div>

    )

}

export default LandingPageScreen
