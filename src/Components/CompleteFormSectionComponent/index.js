import React from 'react';
import './style.scss'
import {Col, Row} from 'antd'
import FirstFormComponent from "../FirstFormComponent";


const CompleteFormSectionComponent = () => {

    return(
        <section className='completeFormSectionWrapper'>
            <Row>
                <Col span={24}>
                    <p className='phaseHeadingWrapper'>
                        *Phase 1 is subject to change to a homeschool community in Washington country.
                    </p>

                </Col>

            </Row>
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

                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>

                </Col>
            </Row>

        </section>
    )

}

export default CompleteFormSectionComponent
