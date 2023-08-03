"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Logo } from '@/components/'

import { useSelector, useDispatch } from 'react-redux'


function Header() {
    const menuList = [
        {
            name: "Hazır Çözümler",
            link: "/hazir-cozumler"
        },
        
        {
            name: "Kendi Çözümünüzü Yaratın",
            link: "/kendi-cozumunuzu-yaratin"
        },
        
        {
            name: "Profesyonel İş Ortağımız Olun",
            link: "/profesyonel-is-ortagimiz-olun"
        },
    ]
    return (
        <header className="header">
            <div className="container">
                <Logo />
                <nav>
                        {
                            menuList.map((item, key) => (
                                    <Link key={key} href={item.link}>{item.name}</Link>
                            ))
                        }  
                </nav>
                <div className='account'>
                    <Button href="/account/login" text="Login" suffix="m-r-5" secondary small />
                    <Button href="/account/register" text="Register" small />
                </div>
                
            </div>
        </header>
    )
}

export default Header