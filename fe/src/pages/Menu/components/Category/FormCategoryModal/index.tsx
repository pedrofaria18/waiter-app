import { useCategoryForm } from '../../../../../components/Forms/CategoryForm/useCategoryForm';

import { Modal } from '../../../../../components/Modal';
import { CategoryForm } from '../../../../../components/Forms/CategoryForm';

import { Category, CategoryRequest } from '../../../../../types/Category';

interface FormCategoryModalProps {
  formType: 'add' | 'edit';
  category: Category | null;
  isLoading: boolean;
  onClose: () => void;
  onChangeCategory: (data: CategoryRequest) => void;
}

export function FormCategoryModal({
  formType,
  category,
  isLoading,
  onClose,
  onChangeCategory,
}: FormCategoryModalProps) {
  if (formType === 'edit' && !category) {
    return null;
  }

  const { register, handleSubmit, isFormFilled } = useCategoryForm(
    category || null
  );

  return (
    <form onSubmit={handleSubmit(onChangeCategory)}>
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
      >
        <CategoryForm register={register} />
      </Modal>
    </form>
  );
}
