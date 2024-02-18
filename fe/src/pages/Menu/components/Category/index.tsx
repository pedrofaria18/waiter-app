import editIcon from '../../../../assets/images/edit.svg';
import trashIcon from '../../../../assets/images/trash.svg';

import { useCategory } from './useCategory';

import { Table } from '../../../../components/Table';
import { RemoveCategoryModal } from './RemoveCategoryModal';
import { FormCategoryModal } from './FormCategoryModal';

export function Category() {
  const {
    categories,
    selectedCategory,
    isModalVisible,
    isLoading,
    handleOpenModal,
    handleCloseModal,
    handleAddCategory,
    handleEditCategory,
    handleRemoveCategory,
  } = useCategory();

  return (
    <>
      {(isModalVisible === 'add' || isModalVisible === 'edit') && (
        <FormCategoryModal
          formType={isModalVisible}
          isLoading={isLoading}
          onClose={handleCloseModal}
          category={selectedCategory}
          onChangeCategory={
            isModalVisible === 'add' ? handleAddCategory : handleEditCategory
          }
        />
      )}

      {isModalVisible === 'remove' && (
        <RemoveCategoryModal
          category={selectedCategory}
          isLoading={isLoading}
          onClose={handleCloseModal}
          onRemoveCategory={handleRemoveCategory}
        />
      )}

      <Table
        title="Categorias"
        quantity={categories.length}
        columns={['Emoji', 'Nome']}
        hasNewItemButton
        labelNewItemButton="Nova Categoria"
        onCreateNewItem={() => {
          handleOpenModal('add', null);
        }}
      >
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.icon}</td>
              <td>{category.name}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleOpenModal('edit', category);
                  }}
                >
                  <img src={editIcon} alt="Botão de Editar" />
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenModal('remove', category)}
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
