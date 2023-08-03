/* eslint-disable */
"use client"
import React, { useState, useEffect, useRef, Component } from 'react'
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from '@/components'

function Register() {
    const inputRef = useRef(null);
    const { register, reset, handleSubmit, watch, formState: { errors }, control } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email Address" name="email" register={register} required />
                <Input type="password" label="Password" name="password" register={register} required />

                <Button type="submit" text="Register" />
            </form>
        </div>
    )
}

export default Register