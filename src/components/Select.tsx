import React from 'react'
import Select from 'react-select'


const SelectComponent: React.FC<any> = ({ name, formik, options, onChange, className, ...props }) => {
    const newOptions = options?.map((option: string) => ({
        label: option,
        value: option
    }))
    const isError = formik?.touched[name] || formik?.errors[name]
    return (
        <>
            <Select
                className={`w-100 my-2 ${className}`}
                name={name}
                placeholder={name}
                defaultInputValue={formik?.values?.[name]}
                options={newOptions}
                onChange={(e: any) => {
                    formik?.setFieldValue(name, e?.value)
                }}
                error={isError}  
                {...props}
            />
            <p className="text-danger">{formik?.errors[name] ? (`- ${formik?.errors[name]}`):''}</p>
        </>
    );
}

export default SelectComponent;