import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import { api } from '../../../../utils/api';

import { Category, CategoryRequest } from '../../../../types/Category';

export function useCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get('/categories').then(({ data }) => {
      setCategories(data);
    });
  }, []);

  function handleOpenModal(
    modal: 'add' | 'edit' | 'remove',
    category: Category | null
  ) {
    setIsModalVisible(modal);
    setSelectedCategory(category);
  }

  function handleCloseModal() {
    setIsModalVisible('');
    setSelectedCategory(null);
  }

  function handleAddCategory({ name, icon }: CategoryRequest) {
    setIsLoading(true);

    api
      .post('/categories', {
        name,
        icon,
      })
      .then(({ data }) => {
        toast.success(`A categoria ${name} foi adicionada!`);

        setCategories((prevState) => [
          ...prevState,
          {
            name,
            icon,
            _id: data._id,
          },
        ]);
      })
      .catch(() => {
        toast.error(`Erro ao adicionar a categoria ${name}, tente novamente!`);
      })
      .finally(() => {
        setIsLoading(false);
        setIsModalVisible('');
      });
  }

  function handleEditCategory({ name, icon }: CategoryRequest) {
    setIsLoading(true);

    api
      .put(`/categories/${selectedCategory?._id}`, {
        name,
        icon,
      })
      .then(() => {
        toast.success(`A categoria ${name} foi editada!`);

        setCategories((prevState) =>
          prevState.map((category) =>
            category._id === selectedCategory?._id
              ? {
                ...category,
                name,
                icon,
              }
              : category
          )
        );
      })
      .catch(() => {
        toast.error(`Erro ao editar a categoria ${name}, tente novamente!`);
      })
      .finally(() => {
        setIsLoading(false);
        setIsModalVisible('');
        setSelectedCategory(null);
      });
  }

  function handleRemoveCategory() {
    setIsLoading(true);

    api.delete(`/categories/${selectedCategory?._id}`);

    toast.success(`A categoria ${selectedCategory?.name} foi excluida!`);

    setCategories((prevState) =>
      prevState.filter((category) => category._id !== selectedCategory?._id)
    );
    setSelectedCategory(null);
    setIsLoading(false);
    setIsModalVisible('');
  }

  return {
    categories,
    selectedCategory,
    isModalVisible,
    isLoading,
    handleOpenModal,
    handleCloseModal,
    handleAddCategory,
    handleEditCategory,
    handleRemoveCategory,
  };
}
