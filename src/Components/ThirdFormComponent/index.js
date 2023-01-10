import React, {useState} from 'react';
import './style.scss'
import {Col, Row} from 'antd'
import { useFormik, ErrorMessage } from 'formik';
import * as yup from "yup";
import {Checkbox, FormControlLabel} from "@material-ui/core";

import { useToasts } from 'react-toast-notifications';
import {ThirdFormBuilderApi} from "../../API";


const ThirdFormComponent = () => {
    const {addToast}  = useToasts();
    const [loading, setLoading]= useState(false);
    const [checkedBox, setCheckedBox]= useState({
        homeschool: false,
        teacher_or_skilled: false,
        wish_we_had: false,
        advocate_for: false,
    });

    const validationSchema = yup.object({
        email: yup
            .string('Please Enter Email ')
            .email('Please Enter Correct Email')
            .required('Email is required'),
        first_name: yup
            .string('Please Enter Company Name ')
            .min(3, 'Please Enter at least 3 letters')
            .required('First Name is required'),
        last_name: yup
            .string('Please Enter Contact Name ')
            .min(3, 'Please Enter at least 3 letters')
            .required('Last Name is required'),
    });




    const formik = useFormik({
        initialValues: {
            homeschool: false,
            teacher_or_skilled: false,
            wish_we_had: false,
            advocate_for: false,
            first_name: '',
            last_name: '',
            email: '',
        },
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: (values, {resetForm}) => {
                debugger

            if(!loading) {
                const body = {
                    homeschool: checkedBox?.homeschool,
                    teacher_or_skilled: checkedBox?.teacher_or_skilled,
                    wish_we_had: checkedBox?.wish_we_had,
                    advocate_for: checkedBox?.advocate_for,
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                }
                ThirdFormBuilderApi(body, addToast, setLoading, setCheckedBox,resetForm);
            }

        },
    });

    const handleCheck = (getData) => {
        debugger
        if(getData === "homeschool"){
            setCheckedBox({homeschool: !checkedBox?.homeschool, teacher_or_skilled: checkedBox.teacher_or_skilled, wish_we_had: checkedBox?.wish_we_had, advocate_for: checkedBox.advocate_for});
        }else if(getData === "teacher_or_skilled"){
            setCheckedBox({homeschool: checkedBox.homeschool, teacher_or_skilled: !checkedBox?.teacher_or_skilled, wish_we_had: checkedBox?.wish_we_had, advocate_for: checkedBox.advocate_for});
        }else if(getData === "wish_we_had"){
            setCheckedBox({homeschool: checkedBox.homeschool, teacher_or_skilled: checkedBox?.teacher_or_skilled, wish_we_had: !checkedBox?.wish_we_had, advocate_for: checkedBox.advocate_for});
        }
        else if(getData === "advocate_for"){
            setCheckedBox({homeschool: checkedBox.homeschool, teacher_or_skilled: checkedBox?.teacher_or_skilled, wish_we_had: checkedBox?.wish_we_had, advocate_for: !checkedBox.advocate_for});
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

                                <FormControlLabel control={<Checkbox id='homeschool' value={checkedBox?.homeschool} checked={checkedBox?.homeschool && checkedBox?.homeschool} onClick={()=>handleCheck('homeschool')} />}  label="I would like to live in a homeschool community." /> <br/>

                                <FormControlLabel control={<Checkbox id='teacher_or_skilled' value={checkedBox?.teacher_or_skilled} checked={checkedBox?.teacher_or_skilled && checkedBox?.teacher_or_skilled} onClick={()=>handleCheck('teacher_or_skilled')} />} label="I am a teacher or skilled parent and am interested in serving a homeschool community." />

                                <FormControlLabel control={<Checkbox id='wish_we_had' value={checkedBox?.wish_we_had} checked={checkedBox?.wish_we_had && checkedBox?.wish_we_had} onClick={()=>handleCheck('wish_we_had')} />} label="I wish we had something like this in our existing community." />

                                <FormControlLabel control={<Checkbox id='advocate_for' value={checkedBox?.advocate_for} checked={checkedBox?.advocate_for && checkedBox?.advocate_for} onClick={()=>handleCheck('advocate_for')} />} label="I advocate for homeschool communities." />

                                <div className='formSectionStyleWrapper'>

                                <div className='rowFormStyle'>
                                    <div className='inputWrapperMarginStyle'>
                                    <input
                                        type="text"
                                        id='first_name'
                                        placeholder='FIRST NAME'
                                        value={formik.values.first_name}
                                        onChange={formik.handleChange}

                                    />
                                    <div className='errorColorStyle'>{formik?.errors.first_name}</div>
                                    </div>
                                    <div className='inputWrapperMarginStyle'>
                                    <input
                                        type="text"
                                        id='last_name'
                                        placeholder='LAST NAME'
                                        value={formik.values.last_name}
                                        onChange={formik.handleChange}

                                    />
                                        <div className='errorColorStyle'>{formik?.errors.last_name}</div>
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
                                            <div className='errorColorStyle'>{formik?.errors.email && formik?.errors.email}</div>
                                        </div>

                                    </div>




                                    <div>
                                        <button className='buttonSubmitStyle' type="submit">
                                            {loading ? "loading..."
                                                :
                                                " I am a homebuyer interested in living in a homeschool community"

                                            }

                                        </button>
                                    </div>

                                </div>


                            </div>

                        </form>

        </div>
    )

}

export default ThirdFormComponent
