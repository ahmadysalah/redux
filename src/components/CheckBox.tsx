import React from 'react'
import { Checkbox } from 'semantic-ui-react'


const CheckBoxComponent: React.FC<any> = ({ name, title, formik }) => {
    return (
        <Checkbox name={name} label={title} onChange={
            (e, { name, checked }) => {
                formik.setFieldValue(name, checked)
            }

        } className='my-2' />
    );
}
export default CheckBoxComponent;