import React, {useState} from 'react';
import './style.scss'
import {Col, Row} from 'antd'
import { useFormik, ErrorMessage } from 'formik';
import * as yup from "yup";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import homeBuilderApi from "../../API";
import { useToasts } from 'react-toast-notifications';


const FirstFormComponent = () => {
    const {addToast}  = useToasts();
    const [loading, setLoading]= useState(false);
    const [checkedBox, setCheckedBox]= useState({
        home_builder: false,
        commercial_builder: false,
    });

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
                        home_builder: checkedBox?.home_builder,
                        commercial_builder:checkedBox?.commercial_builder,
                        company_name: values.company_name,
                        contact_name: values.contact_name,
                        email: values.email,
                    }
                    homeBuilderApi(body, addToast, resetForm, setLoading, setCheckedBox);
                }


            }else{
                debugger
                if(!loading){
                    const body = {
                        home_builder: checkedBox?.home_builder,
                        commercial_builder:checkedBox?.commercial_builder,
                        company_name: values.company_name,
                        contact_name: values.contact_name,
                        email: values.email,
                    }
                    homeBuilderApi(body, addToast, resetForm, setLoading, setCheckedBox);
                }
            }


            // homeBuilderApi(values)
        },
    });

    const handleCheck = (getData) => {
        debugger
       if(getData === "home_builder"){
           setCheckedBox({home_builder: !checkedBox?.home_builder, commercial_builder: checkedBox.commercial_builder});
       }else if(getData === "commercial_builder"){
           setCheckedBox({home_builder: checkedBox.home_builder, commercial_builder: !checkedBox?.commercial_builder});
       }
       debugger

    }

    return(
        <div>
                        <form onSubmit={formik.handleSubmit} >
                            <div className='checksApplyWrapperStyle'>
                                <h4>
                                    Check all that apply:
                                </h4>

                                <FormControlLabel control={<Checkbox id='home_builder'  value={checkedBox?.home_builder} checked={checkedBox?.home_builder && checkedBox?.home_builder} onClick={()=>handleCheck('home_builder')} />} label="I am a homebuilder." /> <br/>

                                <FormControlLabel control={<Checkbox id='commercial_builder'  value={checkedBox?.commercial_builder} checked={checkedBox?.commercial_builder && checkedBox?.commercial_builder} onClick={()=>handleCheck('commercial_builder')} />} label="I am a commercial builder." />

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
                                                "I am interested in building homeschool communities"

                                            }
                                        </button>
                                    </div>

                                </div>


                            </div>

                        </form>

        </div>
    )

}

export default FirstFormComponent
