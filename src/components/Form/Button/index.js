import React from "react";

const Button = ({type, text, className, onClick}) => {
    return(
        <div className="formInputContainer">
            <button
                type={type}
                className={className ? className : "regButton"}
                onClick={onClick}
            >{text}</button>
        </div>
    );
};

export default Button;
