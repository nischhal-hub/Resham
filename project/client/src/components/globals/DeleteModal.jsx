import React from 'react';
import { Button } from '../ui/button';
import useModal from '@/hooks/useModal';
import Modal from './Modal';
import { deleteCategory } from '@/services/apiCategory';
import { deleteUsers } from '@/services/apiUser';
import { deleteSupplier } from '@/services/apiSupplier';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useQueryClient} from '@tanstack/react-query'; 
import { MdOutlineDelete } from 'react-icons/md';
import { deleteProduct } from '@/services/apiProduct';

const DeleteModal = ({ variant, size, className, id, deleteKey }) => {
  const { isOpen, open, close } = useModal();
  const queryClient = useQueryClient();
  
  const { mutate:delCategory } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      toast.success('Data deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['category'] });
      close();
    },
    onError: () => toast.error("Category couldn't be deleted"),
  });

  const { mutate:delSupplier } = useMutation({
    mutationFn: deleteSupplier,
    onSuccess: () => {
      toast.success('Data deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['supplier'] });
      close();
    },
    onError: () => toast.error("supplier couldn't be deleted"),
  });

  const { mutate:delUsers } = useMutation({
    mutationFn: deleteUsers,
    onSuccess: () => {
      toast.success('Data deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['users'] });
      close();
    },
    onError: () => toast.error("User couldn't be deleted"),
  });

  const { mutate:delProduct } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toast.success('Data deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['product'] });
      close();
    },
    onError: () => toast.error("Product couldn't be deleted"),
  });



  const handleDelete = () => {
    switch (deleteKey) {
      case 'CATEGORY':
        return delCategory(id);
      case 'USERS':
        return delUsers(id);
      case 'SUPPLIER':
        return  delSupplier(id);
      case 'PRODUCT':
        return  delProduct(id);
      default:
        throw new Error('Invalid delete key');
    }
  };

  return (
    <>
      <Button
        variant={variant || 'destructive'}
        size={size || 'default'}
        className={className}
        onClick={open}
      >
        <MdOutlineDelete size={24} />
      </Button>
      {isOpen && (
        <Modal close={close}>
          <h2 className="text-xl font-medium text-center">Delete Item</h2>
          <div className="w-full object-contain flex justify-center items-center pt-2">
            <img
              src="public/assets/trendy-dustbin-concepts-vector.png"
              alt="dustbin"
              className="w-20"
            />
          </div>
          <p className="text-center font-semibold text-md py-3">
            Are you sure you want to delete this item?
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-md" onClick={close}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              className="w-full flex-1 text-md"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DeleteModal;
