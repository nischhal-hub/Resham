import AddUser from "./AddUser"
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
import ErrorModal from "./ErrorModal";
import EditCategory from "./EditCategory";

const getModal = (component,editId,close) => {
    switch(component){
        case "ADD_USER_MODAL":
            return (<AddUser/>);
        case "ADD_PRODUCT_MODAL":
            return (<AddProduct/>);
        case "ADD_CATEGORY_MODAL":
            return (<AddCategory close={close}/>);
        case "EDIT_CATEGORY_MODAL":
            return (<EditCategory editId={editId} close={close}/>);
        default:
            return (<ErrorModal/>);
    }
}

export default getModal;