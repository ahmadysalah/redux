import React from 'react'
import { Select, } from 'semantic-ui-react'


const SelectComponent: React.FC<any> = ({placeholder,options,onChange,className,...props}) => {
    const newOptions = options?.map((option:string) => ({
        // key: option,
        text: option,
        value: option
    }))

    return (
        <Select placeholder={placeholder}    
         className={`w-100 my-2 ${className}`} 
         options={newOptions} 
         onChange={(_:any,data:any)=>onChange(data.value)}
          {...props} 
        />
    );
}

export default SelectComponent;