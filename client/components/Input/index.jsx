/* eslint-disable */

import React from 'react';

function Input({ label, register, name, required, className, type = "text", icon, id, buttonClass, errorMessage, errors, ...props }) {
    return (
        <>
            <div {...id ? id = { id } : ""}
                className={`input ${className ? className : ""} ${icon ? "input--icon" : ""}`.trim()}>
                <input type={type} placeholder={label} {...register(name, { required })} {...props} />
                <label htmlFor={name}>{label}</label>
                <i className="icon-alert"></i>
                {icon && <button type="button" className={`input__icon ${buttonClass}`}>
                    <i className={icon}></i>
                </button>
                }
            </div>
        </>
    )
}

export default Input