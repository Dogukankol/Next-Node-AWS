"use client"
import React, {useState} from 'react'

import { Button } from '@/components/'
import { useSelector, useDispatch } from 'react-redux'

function Modals({ children, className, visible }) {
    return (
        <div className={`modal ${className ? className : ""} ${visible == true ? "modal__show" : ""}`}>
            <div className='modal__mask'></div>
            <div className='modal__content'>
            {children}
            </div>
        </div>
    )
}

function ModalHeader({children, modalCloser = true }) {
    const dispatch = useDispatch();
    const modalName = useSelector(modalStatusState);
    const handleModalClose = (event) => {
        if(modalName.visible == true) {
            dispatch(setModalVisible({ modal: modalName.modal, visible: false }))
        }
    }
    return (
        <div className='modal__header'>
            {children}
            {modalCloser == true && <Button className="button__simple button__modal-close" onClick={handleModalClose} ><i className="icon-cancel"></i></Button>}
        </div>
    )
}

function ModalBody({ children }) {
    return (
        <div className='modal__body'>{children}</div>
    )
}

function ModalFooter({ children }) {
    return (
        <div className='modal__footer'>{children}</div>
    )
}

function ModalButton({modalName, ...props}) {
    const dispatch = useDispatch()
    
    const handleModalOpen = (event) => {
        dispatch(setModalVisible({modal: modalName, visible: true}))
    }

    return(
        <Button onClick={handleModalOpen} {...props} />
    )
}

export { Modals, ModalHeader, ModalBody, ModalFooter, ModalButton };