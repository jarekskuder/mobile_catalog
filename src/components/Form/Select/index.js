import React from "react";

const Select = ({label, name, className, value, onChange, options}) => {
    return(
        <div className="formInputContainer">
            {label && <label>{label}</label>}
            <select
                className={className ? className : "select"}
                onChange={onChange}
                value={value}
                name={name}
            >
                <option value="" disabled hidden={true}>
                    {label ? label : name}...
                </option>

                {options && options.map((item, index) =>
                    <option key={index} value={item.value}>{item.name}</option>
                )}
            </select>
        </div>
    );
};

export default Select;
