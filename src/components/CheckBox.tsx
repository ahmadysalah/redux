import React from 'react'
import { Checkbox } from 'semantic-ui-react'


const CheckBoxComponent: React.FC<any> = ({title,onChange}) => {
    return (
        <Checkbox label={title} onChange={(_:any,data:any)=>onChange(data.checked)} className='my-2'/>
    );
}
export default CheckBoxComponent;