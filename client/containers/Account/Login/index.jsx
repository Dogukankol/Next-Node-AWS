/* eslint-disable */
"use client"
import React, { useRef, useEffect } from 'react'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CryptoJS from 'crypto-js';
import { useDispatch, useSelector } from 'react-redux';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'

import { Input, Button, Error, InfoBox } from '@/components'
import { login, selectMsgSuccess, selectMsgError, selectIsLogin } from "@/stores/Account/accountSlice";
import { isAuth } from '@/helpers/auth';


function Register() {
    const dispatch = useDispatch();
    const router = useRouter()

    const msgSuccess = useSelector(selectMsgSuccess);
    const msgError = useSelector(selectMsgError);
    const isLogin = useSelector(selectIsLogin);

    useEffect(() => {
        isLogin && router.push("/")
    }, [isLogin])
    
    const formSchema = Yup.object({
        email: Yup.string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters"),
    });

    const { register, reset, handleSubmit, watch, formState: { errors }, control } = useForm({ resolver: yupResolver(formSchema) });

    const onSubmit = (data) => {
        const hashedPassword = CryptoJS.AES.encrypt(data.password, process.env.NEXT_PUBLIC_ENV_CRYPTO_KEY).toString();

        try {
            dispatch(login({
                email: data.email,
                password: hashedPassword
            }));

            isLogin ? router.push("/") : "";
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='account-page'>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                {
                    msgSuccess ?
                        <InfoBox className="m-b-15 infobox--success" text={msgSuccess} icon={<InfoCircleOutlined />}></InfoBox> :
                        msgError ?
                            <InfoBox className="m-b-15 infobox--error" text={msgError} icon={<InfoCircleOutlined />}></InfoBox> : ""
                }
                <div className="form__group">
                    <Input label="Email Address" name="email" register={register} required className={errors.email ? "input--error" : ""} />
                    {errors.email && <Error text={errors.email?.message} />}

                </div>
                <div className="form__group">
                    <Input type="password" label="Password" name="password" register={register} required className={errors.password ? "input--error" : ""} />
                    {errors.password && <Error text={errors.password?.message} />}
                </div>
                <div className="form__group m-t-25">
                    <Button type="submit" text="Register" />
                </div>
            </form>
        </div>
    )
}

export default Register