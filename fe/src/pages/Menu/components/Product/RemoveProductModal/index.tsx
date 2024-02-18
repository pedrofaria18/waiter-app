import { Modal } from '../../../../../components/Modal';

import { Product } from '../../../../../types/Product';
import { formatCurrency } from '../../../../../utils/formatCurrency';

import { Container, Content } from './styles';

interface RemoveProductModalProps {
  product: Product | null;
  isLoading: boolean;
  onClose: () => void;
  onRemoveProduct: () => void;
}

export function RemoveProductModal({
  product,
  isLoading,
  onClose,
  onRemoveProduct,
}: RemoveProductModalProps) {
  if (!product) {
    return null;
  }

  return (
    <Modal
      onClose={onClose}
      title="Excluir Produto"
      button={{
        primary: (
          <button
            type="button"
            className="primary"
            onClick={onRemoveProduct}
            disabled={isLoading}
          >
            Excluir Produto
          </button>
        ),
        secondary: (
          <button
            type="button"
            className="secondary"
            disabled={isLoading}
            onClick={onClose}
          >
            Manter Produto
          </button>
        ),
      }}
    >
      <Container>
        <p>Tem certeza que deseja excluir o produto ?</p>

        <Content>
          <img src={`http://localhost:3001/uploads/${product.imagePath}`} alt={product.name} width={158} />
          <div>
            <span>
              {product.category.icon} &nbsp; {product.category.name}
            </span>
            <strong>{product.name}</strong>
            <span>{formatCurrency(product.price)}</span>
          </div>
        </Content>
      </Container>
    </Modal>
  );
}
