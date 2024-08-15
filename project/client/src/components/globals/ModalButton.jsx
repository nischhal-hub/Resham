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
                    {getModal(modal?.component || "",editId ||"",close)}
                </Modal>)}
        </>
    )
}

export default ModalButton