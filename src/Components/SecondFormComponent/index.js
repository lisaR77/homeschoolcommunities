import React from 'react';
import './style.scss'
import {Col, Row} from 'antd'
import { useFormik, ErrorMessage } from 'formik';
import * as yup from "yup";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import homeBuilderApi from "../../API";
import { useToasts } from 'react-toast-notifications';


const SecondFormComponent = () => {
    const {addToast}  = useToasts();

    const validationSchema = yup.object({
        email: yup
            .string('Please Enter Email ')
            .email('Please Enter Correct Email')
            .required('Email is required'),
        company_name: yup
            .string('Please Enter Company Name ')
            .required('Company Name is required'),
        contact_name: yup
            .string('Please Enter Contact Name ')
            .required('Contact Name is required'),
    });




    const formik = useFormik({
        initialValues: {
            home_builder: false,
            commercial_builder: false,
            company_name: '',
            contact_name: '',
            email: '',
            phone: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if(values.phone === ""){
                debugger
                const body = {
                    home_builder: values.home_builder,
                    commercial_builder: values.commercial_builder,
                    company_name: values.company_name,
                    contact_name: values.contact_name,
                    email: values.email,
                }
                homeBuilderApi(body, addToast);
            }else{
                debugger
                homeBuilderApi(values, addToast);
            }


            // homeBuilderApi(values)
        },
    });
    return(
        <div>
                        <form onSubmit={formik.handleSubmit} >
                            <div className='checksApplyWrapperStyle'>
                                <h4>
                                    Check all that apply:
                                </h4>

                                <FormControlLabel control={<Checkbox id='home_builder' onChange={formik.handleChange} />} label="I am a realtor and plan to tell my clients about homeschool communities " /> <br/>


                                <div className='formSectionStyleWrapper'>

                                <div className='rowFormStyle'>
                                    <div className='inputWrapperMarginStyle'>
                                    <input
                                        type="text"
                                        id='company_name'
                                        placeholder='COMPANY NAME'
                                        value={formik.values.company_name}
                                        onChange={formik.handleChange}

                                    />
                                    <div className='errorColorStyle'>{formik?.errors.company_name}</div>
                                    </div>
                                    <div className='inputWrapperMarginStyle'>
                                    <input
                                        type="text"
                                        id='contact_name'
                                        placeholder='CONTACT NAME'
                                        value={formik.values.contact_name}
                                        onChange={formik.handleChange}

                                    />
                                        <div className='errorColorStyle'>{formik?.errors.contact_name}</div>
                                    </div>

                                </div>

                                    <div className='rowFormStyle'>
                                        <div className='inputWrapperMarginStyle'>
                                        <input
                                            type="text"
                                            id='email'
                                            placeholder='EMAIL ADDRESS'
                                            value={formik.values.email}
                                            onChange={formik.handleChange}


                                        />
                                            <div className='errorColorStyle'>{formik?.errors.email}</div>
                                        </div>


                                    </div>

                                    <div className='rowFormStyle'>
                                        <div className='inputWrapperMarginStyle'>
                                        <input
                                            type="text"
                                            id='phone'
                                            placeholder='CONTACT NUMBER (OPTIONAL)'
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}

                                        />
                                        </div>

                                    </div>



                                    <div>
                                        <button className='buttonSubmitStyle' type="submit">
                                            I am a realtor interested in selling homes in a homeschool community
                                        </button>
                                    </div>

                                </div>


                            </div>

                        </form>

        </div>
    )

}

export default SecondFormComponent
