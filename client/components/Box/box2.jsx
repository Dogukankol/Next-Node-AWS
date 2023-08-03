import React from 'react'
import Link from 'next/link'

function Box2({href="#", className="box__gradient", classWrap="box__gradient", icon, head, desc, element="div ", attr}) {
  return (
    <Link href={href} { ...attr ? attr : ""} className={`${classWrap}--wrap`}>
        <div className={`${className}`}>
            {icon ? <i className={icon}></i> : ""}
            {head ? <h3>{head}</h3> : ""}
            {desc ? <p>{desc}</p> : ""}
        </div>
    </Link>
  )
}

export default Box2