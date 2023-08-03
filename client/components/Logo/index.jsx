import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImg from '@/assets/images/logos/logo-ultia.svg'

function Logo() {
    return (
        <Link href="/">
            <figure className="logo">
                <Image alt="Turkcell Logo" src={logoImg} fill />
            </figure>
        </Link>
    )
}

export default Logo