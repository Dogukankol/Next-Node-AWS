import React from 'react'
import Link from 'next/link'
import { Logo } from '@/components'
import { GithubOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <footer className="footer">
            <div className='container'>
                <Logo />
                <p className='m-l-25'>© 2023 Ultia — <GithubOutlined /> <Link href="https://github.com/Dogukankol">@dogukankol</Link></p>
            </div>
        </footer>
    )
}

export default Footer