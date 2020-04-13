import React from "react";

const Input = ({label, type, name, className, value, onChange, maxLength}) => {
    return(
        <div className="formInputContainer">
            {label && <label>{label}</label>}
            <input
                type={type}
                name={name}
                className={className ? className : ""}
                maxLength={maxLength ? maxLength : 30}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
