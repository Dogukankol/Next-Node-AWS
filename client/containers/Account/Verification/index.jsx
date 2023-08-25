import React from 'react'
import Link from 'next/link'
import jwt from 'jsonwebtoken'

import {Button} from '@/components/'

function Verification({params}) {
  const token = params.id;
  const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_ENV_JWT_PRIVATE_KEY);
  const {fullname, email, password} = decoded;
  return (
    <div className='verification center'>
      <h1>Welcome {fullname}!</h1>
      <p className='m-t-15'>Your membership process has been successfully completed</p>
      <Link href="/" ><Button suffix="m-t-15" text="Back to Homepage" /></Link>

    </div>
  )
}

export default Verification