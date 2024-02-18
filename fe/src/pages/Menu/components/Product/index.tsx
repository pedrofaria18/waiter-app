import editIcon from '../../../../assets/images/edit.svg';
import trashIcon from '../../../../assets/images/trash.svg';

import { useProduct } from './useProduct';

import { Table } from '../../../../components/Table';
import { FormProductModal } from './FormProductModal';
import { RemoveProductModal } from './RemoveProductModal';

import { formatCurrency } from '../../../../utils/formatCurrency';

export function Product() {
  const {
    products,
    selectedProduct,
    isModalVisible,
    isLoading,
    handleOpenModal,
    handleCloseModal,
    handleAddProduct,
    handleEditProduct,
    handleRemoveProduct,
  } = useProduct();

  return (
    <>
      {(isModalVisible === 'add' || isModalVisible === 'edit') && (
        <FormProductModal
          formType={isModalVisible}
          isLoading={isLoading}
          onClose={handleCloseModal}
          product={selectedProduct}
          onChangeProduct={
            isModalVisible === 'add' ? handleAddProduct : handleEditProduct
          }
        />
      )}

      {isModalVisible === 'remove' && (
        <RemoveProductModal
          product={selectedProduct}
          isLoading={isLoading}
          onClose={handleCloseModal}
          onRemoveProduct={handleRemoveProduct}
        />
      )}

      <Table
        title="Produtos"
        quantity={products.length}
        columns={['Imagem', 'Nome', 'Categoria', 'Preço']}
        hasNewItemButton
        labelNewItemButton="Novo Produto"
        onCreateNewItem={() => handleOpenModal('add', null)}
      >
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width={48}
                  height={32}
                />
              </td>
              <td>{product.name}</td>
              <td>
                {product.category.icon} {product.category.name}
              </td>
              <td>{formatCurrency(product.price)}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleOpenModal('edit', product);
                  }}
                >
                  <img src={editIcon} alt="Botão de Editar" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleOpenModal('remove', product);
                  }}
                >
                  <img src={trashIcon} alt="Botão de Excluir" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
