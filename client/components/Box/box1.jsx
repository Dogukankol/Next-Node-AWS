import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Box1({ id="#", title, description, image, thumbnail, className = "default", path="/product/" }) {
    return (
        <Link href={`${path}${id}`}  className={`box__${className}`}>
            <figure>
                <Image src={thumbnail} alt={title} width={260} height={208} />
            </figure>
            <h3>{ title }</h3>
            <p>{ description }</p>
        </Link>
    )
}

export default Box1