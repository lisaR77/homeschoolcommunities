import React, {useEffect, useState} from 'react';
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
import IntoFutureText from '../../Assets/Images/IntoFutureText.png'
import westleImage from '../../Assets/Images/westleImage.png'
import {Col, Row} from "antd";
import WestleCardComponent from "../../Components/WestleCardComponent";
import {useToasts} from "react-toast-notifications";
import {VotingApi, VotingApiFirst} from "../../API";
import FriendlyCardComponent from "../../Components/FriendlyCardComponent";
import { nanoid } from 'nanoid'
import {BsArrowRight} from "react-icons/bs";
import {Link} from "react-router-dom";

import { Loader } from 'react-clip-loader'
import 'react-clip-loader/dist/index.css'


const LandingPageScreen = () => {
    const {addToast}  = useToasts();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
debugger
        const dataToken = localStorage.getItem('machineCode');
        if(!dataToken){
            debugger
            const tokenUnique = nanoid();
            debugger
            localStorage.setItem('machineCode', tokenUnique);
            const body = {
                "ipId": tokenUnique
            }
            VotingApiFirst(body, addToast, setData, setLoading);

        }else{
            const body = {
                "ipId": dataToken
            }
            VotingApiFirst(body, addToast, setData,setLoading);
            debugger
        }
        debugger

    },[]);

    const handleVote = (nameData) => {
        debugger
        const filterData = data?.filter((newData)=> newData?.keyName === nameData);
        debugger
        const dataToken = localStorage.getItem('machineCode');

        if(filterData[0]?.keyName === "homeschool_communities" ){
            const body = {
                "homeschool_communities":!filterData[0]?.status,
                "ipId": dataToken
            }
            VotingApi(body, addToast, setData, setLoading);
        }else if(filterData[0]?.keyName === "existing_community"){
            const body = {
                "existing_community":!filterData[0]?.status,
                "ipId": dataToken
            }
            VotingApi(body, addToast, setData, setLoading);

        }
        else if(filterData[0]?.keyName === "build_this"){
            const body = {
                "build_this":!filterData[0]?.status,
                "ipId": dataToken
            }
            VotingApi(body, addToast, setData, setLoading);

        }
        else if(filterData[0]?.keyName === "live_here"){
            const body = {
                "live_here":!filterData[0]?.status,
                "ipId": dataToken
            }
            VotingApi(body, addToast, setData, setLoading);

        }
        else if(filterData[0]?.keyName === "serve_here"){
            const body = {
                "serve_here":!filterData[0]?.status,
                "ipId": dataToken
            }
            VotingApi(body, addToast, setData, setLoading);

        }
        else if(filterData[0]?.keyName === "my_clients"){
            const body = {
                "my_clients":!filterData[0]?.status,
                "ipId": dataToken
            }
            VotingApi(body, addToast, setData, setLoading);

        }


    }

    return(
        <div>

        <div className='landingMainOuterWrapper'>
            {loading ?
                <div className='overlayLoaderWrapper'>
                    <Loader small={true} />
                </div> : null
            }

            <div className='landingBannerContentWrapper'>
                <p>
                    Building homeschool communities
                </p>
                <h3>DRIVING  <span> CHANGE </span>  IN <span> EDUCATION </span></h3>

                <Link to={'/article'} className={'linkReadMore'}>
                    <div className='readMoreButtonWrapper'>
                        <p>
                            Read On
                        </p>
                        <BsArrowRight className='arrowrightIcon' size={22} color={'#fff'} />

                    </div>

                </Link>

            </div>



            <div className='sliderToggleWrapper'>
                <div className='toggleCoupleFlex'>
                    {data?.map((data1, index)=>
                        index <= 2 &&
                        <div>
                            <ToggleComponent statusData={data1?.status} name={data1?.keyName} detail={data1?.check} handleVote={handleVote} />
                        </div>

                    )}

                </div>
                <div className='centerSlideImageWrapper'>
                    <img src={sliderImage} alt=""/>
                </div>
                <div className='toggleCoupleFlex'>
                    {data?.map((data1, index)=>
                        index > 2 && index <= 5 &&
                        <div>
                            <ToggleComponent statusData={data1?.status} name={data1?.keyName} detail={data1?.check} handleVote={handleVote} />
                        </div>

                    )}

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
                                        Reserve the Auditorium & Science Labs
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




            <section className='friendSectionMainWrapper'>

                <div className='headingFriendlySection'>
                    <h3>
                        Homeschool-Friendly  Neighborhoods
                    </h3>

                </div>

                <div className='cardFriendlyWrapper'>
                    <div className='wrapCarStyle'>
                        <FriendlyCardComponent phase={'PHASE 1'} project={'Projected to begin in 2024'} address={'TBD, UT'} />
                    </div>

                    <div className='wrapCarStyle'>
                        <FriendlyCardComponent phase={'PHASE 2'} project={'Projected to begin in 2025'} address={'TBD, UT'} />
                    </div>
                    <div className='wrapCarStyle'>
                        <FriendlyCardComponent phase={'PHASE 3'} project={'Projected to begin in 2026'} address={'High Growth Area'} />
                    </div>
                    <div className='wrapCarStyle'>
                        <FriendlyCardComponent phase={'PHASE 4'} project={'Projected to begin in 2027'} address={'Lehi, UT'} />
                    </div>

                </div>


            </section>



            {/*Form Section start*/}
            <section>
                <CompleteFormSectionComponent />
            </section>






        </div>

    )

}

export default LandingPageScreen
