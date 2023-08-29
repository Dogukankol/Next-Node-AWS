"use client"
import React, {useEffect} from 'react'
import Link from 'next/link'
import jwt from 'jsonwebtoken'
import { useDispatch, useSelector } from 'react-redux';

import { verificationUser } from "@/stores/Account/accountSlice";
import {Button} from '@/components/'

function Verification({params}) {
  const dispatch = useDispatch();
  const token = params.id;
  const decoded = jwt.decode(token, process.env.NEXT_PUBLIC_ENV_JWT_PRIVATE_KEY);
  const {fullname, email, password} = decoded;
  
  useEffect(() => {
    dispatch(verificationUser(decoded))
  }, [token])
  

  return (
    <div className='verification center'>
      <h1>Welcome {fullname}!</h1>
      <p className='m-t-15'>Your membership process has been successfully completed</p>
      <Link href="/" ><Button suffix="m-t-15" text="Back to Homepage" /></Link>

    </div>
  )
}

export default Verification