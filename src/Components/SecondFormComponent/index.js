import React, {useState} from 'react';
import './style.scss'
import {Col, Row} from 'antd'
import { useFormik, ErrorMessage } from 'formik';
import * as yup from "yup";
import {Checkbox, FormControlLabel} from "@material-ui/core";

import { useToasts } from 'react-toast-notifications';
import {RealtorBuilderApi} from "../../API";


const SecondFormComponent = () => {
    const [loading, setLoading]= useState(false);
    const [checkedBox, setCheckedBox]= useState(false);
    const {addToast}  = useToasts();

    const validationSchema = yup.object({
        email: yup
            .string('Please Enter Email ')
            .email('Please Enter Correct Email')
            .required('Email is required'),
        company_name: yup
            .string('Please Enter Company Name ')
            .min(3, 'Please Enter at least 3 letters')
            .required('Company Name is required'),
        contact_name: yup
            .string('Please Enter Contact Name ')
            .min(3, 'Please Enter at least 3 letters')
            .required('Contact Name is required'),
    });




    const formik = useFormik({
        initialValues: {
            company_name: '',
            contact_name: '',
            email: '',
            phone: '',
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: (values,{resetForm}) => {
            if(values.phone === ""){
                debugger
                if(!loading){
                const body = {
                    realtor: checkedBox,
                    company_name: values.company_name,
                    contact_name: values.contact_name,
                    email: values.email,
                }
                RealtorBuilderApi(body, addToast, resetForm, setLoading, setCheckedBox);
                }
            }else{
                debugger
                if(!loading){
                    const body = {
                        realtor: checkedBox,
                        company_name: values.company_name,
                        contact_name: values.contact_name,
                        email: values.email,
                    }
                    RealtorBuilderApi(body, addToast, resetForm, setLoading, setCheckedBox);
                }

            }


            // homeBuilderApi(values)
        },
    });

    const handleCheck = () => {
        debugger
        setCheckedBox(!checkedBox);
    }
    return(
        <div>
                        <form onSubmit={formik.handleSubmit} >
                            <div className='checksApplyWrapperStyle'>
                                <h4>
                                    Check all that apply:
                                </h4>

                                {/*<FormControlLabel control={<Checkbox id='realtor' value={true} onChange={formik.handleChange} />} label="I am a realtor and plan to tell my clients about homeschool communities a period " /> <br/>*/}
                                <FormControlLabel control={<Checkbox id='realtor' value={checkedBox} checked={checkedBox && checkedBox} onClick={handleCheck}  />} label="I am a realtor and plan to tell my clients about homeschool communities a period " /> <br/>


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
                                            {loading ? "loading..."
                                                :
                                                " I am a realtor interested in selling homes in a homeschool community"

                                            }

                                        </button>
                                    </div>

                                </div>


                            </div>

                        </form>

        </div>
    )

}

export default SecondFormComponent
