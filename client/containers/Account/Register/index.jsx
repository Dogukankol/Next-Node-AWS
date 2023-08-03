/* eslint-disable */
"use client"
import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import { Input, Button, Error } from '@/components'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Register() {
    const inputRef = useRef(null);

    const inputList = [
        {
            name: "fullname",
            label: "Fullname"
        },
        {
            name: "email",
            label: "Email Address"
        },
        {
            name: "password",
            label: "Password"
        },
        {
            name: "confirmpassword",
            label: "Confirm Password"
        },
    ]

    const formSchema = Yup.object({
        fullname: Yup.string()
            .required("Enter your fullname"),
        email: Yup.string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters"),
        confirmpassword: Yup.string()
            .required("Confirm Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters")
            .oneOf([Yup.ref("password")], "Passwords do not match")
    });

    const { register, reset, handleSubmit, watch, formState: { errors }, control } = useForm({ resolver: yupResolver(formSchema) });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='account-page'>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form__group">
                    <Input label="Fullname" name="fullname" register={register} required className={errors.fullname ? "input--error" : ""} />
                    {errors.fullname && <Error text={errors.fullname?.message} />}

                </div>
                <div className="form__group">
                    <Input label="Email Address" name="email" register={register} required className={errors.email ? "input--error" : ""} />
                    {errors.email && <Error text={errors.email?.message} />}

                </div>
                <div className="form__group">
                    <Input type="password" label="Password" name="password" register={register} required className={errors.password ? "input--error" : ""} />
                    {errors.password && <Error text={errors.password?.message} />}

                </div>
                <div className="form__group">
                    <Input type="password" label="Confirm Password" name="confirmpassword" register={register} required className={errors.confirmpassword ? "input--error" : ""} />
                    {errors.confirmpassword && <Error text={errors.confirmpassword?.message} />}

                </div>
                <div className="form__group m-t-25">
                    <Button type="submit" text="Register" />
                </div>
            </form>
        </div>
    )
}

export default Register