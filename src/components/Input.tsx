import React from 'react'
import { Input, TextArea, Form } from 'semantic-ui-react'

const InputText: React.FC<any> = ({ textArea, formik, className, icon, name, ...props }) => {
    return (
        <div className={`w-100 my-2  ${className}`} > 
            {textArea ? (
                <Form>
                    <TextArea
                        placeholder={name}
                        value={formik?.values[name]||''}
                        rows={5}
                        onChange={
                            formik?.handleChange
                        }
                        className='my-2 w-100 py-6'
                        error={formik?.errors[name]}
                        name={name}
                        {...props} />
                </Form>
            ) : (
                <Input icon={icon}
                    iconPosition={icon && 'left'}
                    placeholder={name}
                    error={formik?.errors[name]}
                    value={formik?.values[name]||''}
                    name={name}
                    onChange={
                        formik?.handleChange
                    }
                    className={`w-100  mb-2 ${className}`}
                    {...props}
                />
            )}
             <p className="text-danger">{formik?.errors[name]  && '- ' + formik?.errors[name]}</p>

        </div>
    );
}

export default InputText;