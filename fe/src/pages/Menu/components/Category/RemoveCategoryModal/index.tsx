import { Modal } from '../../../../../components/Modal';

import { Category } from '../../../../../types/Category';

import { Container } from './styles';

interface RemoveCategoryModalProps {
  category: Category | null;
  isLoading: boolean;
  onClose: () => void;
  onRemoveCategory: () => void;
}

export function RemoveCategoryModal({
  category,
  isLoading,
  onClose,
  onRemoveCategory,
}: RemoveCategoryModalProps) {
  if (!category) {
    return null;
  }

  return (
    <Modal
      onClose={onClose}
      title="Excluir Categoria"
      button={{
        primary: (
          <button
            type="button"
            className="primary"
            onClick={onRemoveCategory}
            disabled={isLoading}
          >
            Excluir Categoria
          </button>
        ),
        secondary: (
          <button
            type="button"
            className="secondary"
            disabled={isLoading}
            onClick={onClose}
          >
            Manter Categoria
          </button>
        ),
      }}
    >
      <Container>
        <p>Tem certeza que deseja excluir a categoria ?</p>

        <span>
          {category.icon} &nbsp; {category.name}
        </span>
      </Container>
    </Modal>
  );
}
