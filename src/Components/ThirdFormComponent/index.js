import React from 'react';
import './style.scss'
import {Col, Row} from 'antd'
import { useFormik, ErrorMessage } from 'formik';
import * as yup from "yup";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import homeBuilderApi from "../../API";
import { useToasts } from 'react-toast-notifications';


const ThirdFormComponent = () => {
    const {addToast}  = useToasts();

    const validationSchema = yup.object({
        email: yup
            .string('Please Enter Email ')
            .email('Please Enter Correct Email')
            .required('Email is required'),
        first_name: yup
            .string('Please Enter Company Name ')
            .required('First Name is required'),
        last_name: yup
            .string('Please Enter Contact Name ')
            .required('Last Name is required'),
    });




    const formik = useFormik({
        initialValues: {
            live_home_school: false,
            commercial_builder: false,
            existing_community: false,
            advocate_home_school: false,
            first_name: '',
            last_name: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
                debugger
                homeBuilderApi(values, addToast);

        },
    });
    return(
        <div>
                        <form onSubmit={formik.handleSubmit} >
                            <div className='checksApplyWrapperStyle'>
                                <h4>
                                    Check all that apply:
                                </h4>

                                <FormControlLabel control={<Checkbox id='home_builder' onChange={formik.handleChange} />} label="I would like to live in a homeschool community." /> <br/>

                                <FormControlLabel control={<Checkbox id='commercial_builder' onChange={formik.handleChange} />} label="I am a teacher or skilled parent and am interested in serving a homeschool community." />

                                <FormControlLabel control={<Checkbox id='commercial_builder' onChange={formik.handleChange} />} label="I wish we had something like this in our existing community." />

                                <FormControlLabel control={<Checkbox id='commercial_builder' onChange={formik.handleChange} />} label="I advocate for homeschool communities." />

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
                                            <div className='errorColorStyle'>{formik?.errors.email}</div>
                                        </div>

                                    </div>




                                    <div>
                                        <button className='buttonSubmitStyle' type="submit">
                                            I am a homebuyer interested in living in a homeschool community
                                        </button>
                                    </div>

                                </div>


                            </div>

                        </form>

        </div>
    )

}

export default ThirdFormComponent
