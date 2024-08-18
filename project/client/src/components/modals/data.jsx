import AddUser from "./AddUser"
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
import ErrorModal from "./ErrorModal";
import EditCategory from "./EditCategory";
import AddSupplier from "./AddSupplier";
import Editsupplier from "./EditSupplier";
import EditProduct from "./EditProduct";
const getModal = (component, editId, close) => {
    switch (component) {
        case "ADD_USER_MODAL":
            return (<AddUser close={close} />);
        case "ADD_PRODUCT_MODAL":
            return (<AddProduct close={close} />);
        case "ADD_CATEGORY_MODAL":
            return (<AddCategory close={close} />);
        case "EDIT_CATEGORY_MODAL":
            return (<EditCategory editId={editId} close={close} />);
        case "ADD_SUPPLIER_MODAL":
            return (<AddSupplier close={close} />);
        case "EDIT_SUPPLIER_MODAL":
            return <Editsupplier editId={editId} close={close} />;
        case "EDIT_PRODUCT_MODAL":
            return <EditProduct editId={editId} close={close} />
        default:
            return (<ErrorModal />);
    }
}

export default getModal;