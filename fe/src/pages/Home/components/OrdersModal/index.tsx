import { formatCurrency } from '../../../../utils/formatCurrency';

import { Modal } from '../../../../components/Modal';

import { Order } from '../../../../types/Order';

import { OrderDetails } from './styles';

interface OrdersModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder: () => void;
  isLoading: boolean;
  onChangeOrderStatus: () => void;
}

export function OrdersModal({
  visible,
  order,
  onClose,
  onCancelOrder,
  isLoading,
  onChangeOrderStatus,
}: OrdersModalProps) {
  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  return (
    <Modal
      onClose={onClose}
      title="Cancelar Pedido"
      button={{
        primary: order.status != 'DONE' && (
          <button
            type="button"
            className="primary"
            disabled={isLoading}
            onClick={onChangeOrderStatus}
          >
            <strong>
              {order.status === 'WAITING' && 'Iniciar Produção'}
              {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
            </strong>
          </button>
        ),
        secondary: (
          <button
            type="button"
            className="secondary"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            Cancelar Pedido
          </button>
        ),
      }}
    >
      <div className="status-container">
        <small>Status do Pedido</small>
        <div>
          <span>
            {order.status === 'WAITING' && '🕑'}
            {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
            {order.status === 'DONE' && '✅'}
          </span>
          <strong>
            {order.status === 'WAITING' && 'Fila de espera'}
            {order.status === 'IN_PRODUCTION' && 'Em preparação'}
            {order.status === 'DONE' && 'Pronto!'}
          </strong>
        </div>
      </div>

      <OrderDetails>
        <strong>Itens</strong>

        <div className="order-items">
          {order.products.map(({ _id, product, quantity }) => (
            <div className="item" key={_id}>
              <img
                src={`http://localhost:3001/uploads/${product.imagePath}`}
                alt={product.name}
                width="56"
                height="28.51"
              />

              <span className="quantity">{quantity}x</span>

              <div className="product-details">
                <strong>{product.name}</strong>
                <span>{formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="total">
          <span>Total</span>
          <strong>{formatCurrency(total)}</strong>
        </div>
      </OrderDetails>
    </Modal>
  );
}
