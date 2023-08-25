import React from 'react'
import Link from 'next/link'


function Button({ text, className, href, disabled, primary, secondary, tertiary, icon, type="button", children, small, suffix, ...props }) {
    return (
        <>
            {href ?
                <Link href={href} className={`button ${className ? className : secondary ? "button--secondary" : "button--primary"} ${small ? "button--small" : ""} ${suffix ? suffix : ""}`.trim()}
                    {...disabled ? disabled : ""}
                    {...props}>
                    <span>{text} </span>{icon ? `<i className=${`${icon}`}></i>` : ""}
                </Link>
                :
                <button type={type} className={`button ${className ? className : secondary ? "button--secondary" : "button--primary"} ${small ? "button--small" : ""} ${suffix ? suffix : ""}`.trim()}
                    {...disabled ? disabled : ""}
                    {...props}>
                    <span>{text}{children}</span> {icon ? `<i className=${`${icon}`}></i>` : ""}
                </button>
            }
        </>
    )
}

export default Button