import React from 'react';
import './style.scss'
import {Col, Row} from 'antd'
import FirstFormComponent from "../FirstFormComponent";
import SecondFormComponent from "../SecondFormComponent";
import ThirdFormComponent from "../ThirdFormComponent";



const CompleteFormSectionComponent = () => {

    return(
        <section className='completeFormSectionWrapper'>

            <Row>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <div className='firstFormSectionWrapper'>
                        <div className='ListSectionWrapper'>
                            <ul>
                                <li>
                                    I am a homebuilder interested in building a homeschool community.
                                </li>
                                <li>
                                    I am a commercial builder and interested in building some of the resources offered in a homeschool community.
                                </li>
                            </ul>

                        </div>

                      <FirstFormComponent />



                    </div>

                    <div className='firstFormSectionWrapper'>


                        <SecondFormComponent />



                    </div>

                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <div className='firstFormSectionWrapper'>
                        <div className='ListSectionWrapper'>
                            <ul>
                                <li>
                                    I would be interested in renting my home out daily or quarterly to homeschool groups for passive income opportunity.
                                </li>
                                <li>
                                    I am a skilled parent and would open a class out of my home because I am passionate about the skill I possess and welcome income opportunity.

                                </li>
                                <li>
                                    I am an instructor and would open a class out of my home because I am passionate about teaching and welcome income opportunity.

                                </li>
                                <li>
                                    I am a skilled parent or teacher, and am interested in presenting parent workshops in the auditorium and welcome income opportunity.

                                </li>
                                <li>
                                    I am interested in creating sports league opportunities and/or coaching in a homeschool community.

                                </li>
                                <li>
                                    I am interested in having my children learn in a home environment, with access to additional resources for parents and academic opportunities for my kids.

                                </li>
                                <li>
                                    I homeschool my kids and love that everything is centralized. It takes a village to raise a child.

                                </li>
                                <li>
                                    I am a student and wish to build my own curriculum tailored to my personal talents and interests.


                                </li>
                                <li>
                                    I like other features this community offers such as meals provided to parents and their families and the patrons assisting families on campus.

                                </li>
                                <li>
                                    I'm a homebuyer and think this community just sounds cool to live in.
                                </li>

                            </ul>

                        </div>

                        <ThirdFormComponent />



                    </div>
                </Col>
            </Row>

        </section>
    )

}

export default CompleteFormSectionComponent
