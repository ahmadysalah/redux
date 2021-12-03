import React from 'react'

interface SelectProps {

}

const Select: React.FC<SelectProps> = () => {
    return (
        <div>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
    );
}

export default Select;