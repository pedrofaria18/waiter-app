import { useProductForm } from '../../../../../components/Forms/ProductForm/useProductForm';

import { Modal } from '../../../../../components/Modal';
import { ProductForm } from '../../../../../components/Forms/ProductForm';

import { Product, ProductRequest } from '../../../../../types/Product';

interface FormProductModalProps {
  formType: 'add' | 'edit';
  product: Product | null;
  isLoading: boolean;
  onClose: () => void;
  onChangeProduct: (data: ProductRequest) => void;
}

export function FormProductModal({
  formType,
  product,
  isLoading,
  onClose,
  onChangeProduct,
}: FormProductModalProps) {
  if (formType === 'edit' && !product) {
    return null;
  }

  const { register, handleSubmit, isFormFilled, watch, setValue } = useProductForm(
    product || null
  );

  return (
    <form onSubmit={handleSubmit(onChangeProduct)}>
      <Modal
        title={`${formType === 'add' ? 'Nova' : 'Editar'} Categoria`}
        onClose={onClose}
        button={{
          primary: (
            <button
              type="submit"
              className="primary"
              disabled={isLoading || isFormFilled}
            >
              Salvar Alterações
            </button>
          ),
        }}
        width='928'
      >
        <ProductForm register={register} watch={watch} setValues={setValue} />
      </Modal>
    </form>
  );
}
