import React from 'react'
import { Button } from '../ui/button'
import useModal from '@/hooks/useModal'
import Modal from './Modal'
import getModal from '../modals/data'

const ModalButton = ({ variant, size, className, modal }) => {
    const { open, isOpen } = useModal();

    return (
        <>
            <Button variant={variant || "default"} size={size || "default"} className={className} onClick={open}>{modal?.label || "No label"}</Button>
            {isOpen && (
                <Modal>
                    <h2 className='text-xl text-center'>{modal?.label || "Default Modal"}</h2>
                    {getModal(modal?.component || "")}
                </Modal>)}
        </>
    )
}

export default ModalButton