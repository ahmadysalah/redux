import React from 'react'
import { Input, TextArea, Form } from 'semantic-ui-react'



const InputText: React.FC<any> = ({ textArea, state, error, placeholder, value, onChange, className, icon, name, ...props }) => {
    return (
        <>
            {textArea ? (
                <Form>
                    <TextArea
                        placeholder={placeholder}
                        value={state?.[name]}
                        rows={5}
                        className='my-2 w-100 py-6'
                        {...props} />
                </Form>
            ) : (
                <Input icon={icon}
                    iconPosition={icon &&'left'}
                    placeholder={placeholder} error={error} value={state?.[name]}
                    onChange={onChange}
                    className={`w-100 my-2  ${className}`}
                    required
                    {...props}
                />
            )}

        </>
    );
}

export default InputText;