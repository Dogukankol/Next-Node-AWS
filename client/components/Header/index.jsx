"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Logo } from '@/components/'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'

import { isAuth, logout } from '@/helpers/auth'
import { selectIsLogin, setLoginState } from "@/stores/Account/accountSlice";

function Header() {
    const router = useRouter();
    const dispatch = useDispatch();
    const isLogin = useSelector(selectIsLogin);
    console.log(isLogin)
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

    function handleLogout(e) {
        logout();
        router.refresh();
    }
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
                    {!isAuth() ?
                        <>
                            <Link href="/account/login" ><Button text="Login" suffix="m-r-5" secondary small /></Link>
                            <Link href="/account/register" ><Button text="Register" small /></Link>
                        </>
                        :
                        <Link href="/" ><Button text="Sign Out" onClick={(e) => handleLogout()} /></Link>
                    }
                </div>

            </div>
        </header>
    )
}

export default Header