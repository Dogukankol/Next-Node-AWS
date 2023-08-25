import React from 'react'

function InfoBox({className, icon, text}) {
  return (
    <p className={`infobox ${className? className: ""}`}>{icon ? icon : ""} <span className='m-l-5'> {text}</span></p>

  )
}

export default InfoBox