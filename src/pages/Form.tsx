import React from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Input, Select, CheckBox } from '../components';
import { jobFormData } from '../utils/formData'

interface FormProps {

}

const FormPage: React.FC<FormProps> = () => {
    return (
        <div className='w-50 m-auto p-5 '>
            <h4 className='mt-3 font-bold'>Work Experience</h4>
            <Select options={jobFormData.JobTitles} placeholder='Job Title'
                onChange={(e: any) => console.log(e)}
            />
            <Select options={jobFormData.JobFields} placeholder='Job Field'
                onChange={(e: any) => console.log(e)}
            />
            <Select options={jobFormData.JobLocation} placeholder='Job Location'
                onChange={(e: any) => console.log(e)}
            />
            <div className='d-flex '>
                <Input icon='calendar' placeholder='Start Date' className='salary' />
                <Input icon='calendar' placeholder='End Date' />

            </div>
            <div>

                <CheckBox title='Current work there' onChange={(e: any) => console.log(e)} />
            </div>
            <Input textArea placeholder='🖊 Job Description' />

            <h4 className='mt-3 font-bold'>Compony Details</h4>
            <Input icon='building' placeholder='Company Name' />
            <Input icon='target' placeholder='Company Address' />
            <Select options={jobFormData.ComponyIndustry} placeholder='🏢 Company Industry'
                onChange={(e: any) => console.log(e)}
            />
            <Select options={jobFormData.companySize} placeholder='©️ Company Size'
                onChange={(e: any) => console.log(e)}
            />

            <Select options={jobFormData.companySector} placeholder='©️ Company Sector'
                onChange={(e: any) => console.log(e)}
            />
            <Input icon='user' placeholder='SuperVisor Name' />
            <Input icon='users' placeholder='# of employees SuperVisor by you' />
            <Input icon='share square outline' placeholder='Reson of leaving' />
            <h4 className='mt-3 font-bold'>Composition</h4>
            <div className='d-flex'>
                <Input placeholder='start salary' className='salary' />
                <Input placeholder='end salary' className='salary' />
                <Select options={jobFormData.currency} placeholder='salary'
                    onChange={(e: any) => console.log(e)}
                />
            </div>
            <div className='footer mb-5'>
                <button className='btn btn-primary my-2 p-2 float-end'
                    type='submit'>Submit</button>
            </div>
        </div>
    );
}


export default FormPage;