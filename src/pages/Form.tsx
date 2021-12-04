import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { Input, Select, CheckBox } from '../components';
import { jobFormData } from '../utils/formData'
import jobFormValidation from '../utils/jobFormValidation';


interface FormProps {

}

const FormPage: React.FC<FormProps> = () => {
    const formik = useFormik({
        initialValues: jobFormData,
        validationSchema: jobFormValidation,
        onSubmit: values => {
            console.log({values})
        }
    })
    const formRef = React.useRef<HTMLFormElement>(null)


    useEffect(() => {
        if (formRef.current && formik.errors) {
            // formRef.current.scrollIntoView()
        }
    }
        , [formRef, formik.errors])

        // console.log(formik.errors)
    return (
        <div className='w-50 m-auto p-5 ' >
            <form onSubmit={formik.handleSubmit} ref={formRef} >
                <h4 className='mt-3 font-bold'>Work Experience</h4>
                <Select
                    options={jobFormData.JobTitles}
                    name='Job Title'
                    formik={formik}
                />
                <Select
                    options={jobFormData.JobFields}
                    name='Job Field'
                    formik={formik}
                />


                <Select 
                options={jobFormData.JobLocation}
                    name='Job Location'
                    formik={formik}
                />
                <div className='d-flex '>
                    <Input icon='calendar' name='Start Date' className='salary' formik={formik}/>
                    <Input icon='calendar' name='End Date' formik={formik}/>

                </div>
                <div>
                    <CheckBox title='Current work there' name='workHere' formik={formik} />
                </div>
                <Input textArea name='JobDescription' placeholder='🖊 Job Description' formik={formik}/>

                <h4 className='mt-3 font-bold'>Compony Details</h4>
                <Input icon='building' name='Company Name' formik={formik} />
                <Input icon='target' name='Company Address' formik={formik}/>
                <Select
                    options={jobFormData.ComponyIndustry}
                    name='Compony Industry'
                    formik={formik}
                />
                <Select options={jobFormData.companySize} name='Company Size'
                    formik={formik}
                />

                <Select options={jobFormData.companySector} name='Company Sector'
                    formik={formik}
                />
                <Input icon='user' name='SuperVisor Name' formik={formik}/>
                <Input icon='users' name='SuperVisor by you' formik={formik}/>
                <Input icon='share square outline' name='Reson of leaving' formik={formik} />
                <h4 className='mt-3 font-bold'>Composition</h4>
                <div className='d-flex'>
                    <Input name='Start salary' className='salary' formik={formik} />
                    <Input name='End salary' className='salary' formik={formik}/>
                    <Select options={jobFormData.currency} name='Currency'
                        formik={formik}
                    />
                </div>
                <div className='footer mb-5'>
                    <button className='btn btn-primary my-2 p-2 float-end'
                        type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}


export default FormPage;