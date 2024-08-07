import AddUser from "./AddUser"
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
import ErrorModal from "./ErrorModal";
import EditCategory from "./EditCategory";

const getModal = (component,editId) => {
    switch(component){
        case "ADD_USER_MODAL":
            return (<AddUser/>);
        case "ADD_PRODUCT_MODAL":
            return (<AddProduct/>);
        case "ADD_CATEGORY_MODAL":
            return (<AddCategory/>);
        case "EDIT_CATEGORY_MODAL":
            return (<EditCategory editId={editId}/>);
        default:
            return (<ErrorModal/>);
    }
}

export default getModal;