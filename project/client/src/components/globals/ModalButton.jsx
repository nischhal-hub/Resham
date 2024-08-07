import React from 'react'
import { Button } from '../ui/button'
import useModal from '@/hooks/useModal'
import Modal from './Modal'
import getModal from '../modals/data'

const ModalButton = ({ variant, size, className, modal,editId }) => {
    const { isOpen,open,close } = useModal();
    return (
        <>
            <Button variant={variant || "default"} size={size || "default"} className={className} onClick={open}>{modal?.icon || modal?.label || "No label"}</Button>
            {isOpen && (
                <Modal close={close}>
                    <h2 className='text-xl font-medium text-center'>{ modal?.label || "Default Modal"}</h2>
                    {getModal(modal?.component || "",editId ||"")}
                </Modal>)}
        </>
    )
}

export default ModalButton