import AddUser from "./AddUser"
import AddProduct from "./AddProduct";
import ErrorModal from "./ErrorModal";
const getModal = (component) => {
    switch(component){
        case "ADD_USER_MODAL":
            console.log(component)
            return (<AddUser/>);
        case "ADD_PRODUCT_MODAL":
            return (<AddProduct/>);
        default:
            return (<ErrorModal/>);
    }
}

export default getModal;