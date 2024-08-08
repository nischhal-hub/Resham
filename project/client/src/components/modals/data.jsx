import AddUser from "./AddUser"
import AddProduct from "./AddProduct";
import ErrorModal from "./ErrorModal";
import AddSupplier from "./AddSupplier";
const getModal = (component) => {
    switch(component){
        case "ADD_USER_MODAL":
            return (<AddUser/>);
        case "ADD_PRODUCT_MODAL":
            return (<AddProduct/>);
            case "ADD_Supplier_MODAL":
                return (<AddSupplier/>)
        default:
            return (<ErrorModal/>);
    }
}

export default getModal;