import useStore from "../context/modalContext";
const useModal = () => {
    
    const isOpen = useStore((state) => state.isOpen);
    const open = useStore((state) => state.onOpen);
    const close = useStore((state) => state.onClose);
    return { isOpen, open, close };
};

export default useModal;