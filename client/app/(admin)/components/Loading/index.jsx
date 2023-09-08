"use client"
import React, { useEffect, useState } from 'react'

function Loading() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loader = document.getElementsByClassName('loading')[0];
            if (loader) {
                setIsLoading(false)
            }
        }
    }, []);

    return (

        <div className={`loading ${isLoading ? "" : "hide"}`}>
            <div className="loader">
                <div />
                <div />
            </div>
        </div>
    )
}

export default Loading