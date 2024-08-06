import AddUser from "./AddUser"
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
import ErrorModal from "./ErrorModal";
const getModal = (component) => {
    switch(component){
        case "ADD_USER_MODAL":
            return (<AddUser/>);
        case "ADD_PRODUCT_MODAL":
            return (<AddProduct/>);
        case "ADD_CATEGORY_MODAL":
            return (<AddCategory/>);
        default:
            return (<ErrorModal/>);
    }
}

export default getModal;