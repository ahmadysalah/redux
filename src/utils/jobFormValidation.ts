import * as yup from 'yup';

const validationSchema = yup.object({
  'Job Title': yup.string().required('Job Title required'),
  'Job Field': yup.string().required('Job Field required'),
  'Job Location': yup.string().required('Job Location required'),
  'Compony Industry': yup.string().required('Compony Industry required'),
  'Company Size': yup.string().required('company Size required'),
  'Company Sector': yup.string().required('company Sector required'),
  'Currency': yup.string().required('currency required'),
  'Start Date': yup.string().required('Start Date required'),
  'End Date': yup.string().required('End Date required'),
  'WorkHere': yup.bool().required('workHere required'),
  JobDescription: yup.string().required('Job Description required'),
  'Company Name': yup.string().required('Company Name required'),
  'Company Address': yup.string().required('Company Address required'),
  'SuperVisor Name': yup.string().required('SuperVisor Name required'),
  'SuperVisor by you': yup.string().required('SuperVisor by you required'),
  'Reson of leaving': yup.string().required('Reson of leaving required'),
  'Start salary': yup.string().required('start salary required'),
  'End salary': yup.string().required('end salary required'),


});


export default validationSchema;
