import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import { api } from '../../../../utils/api';

import { Product, ProductRequest } from '../../../../types/Product';

export function useProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalVisible, setIsModalVisible] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get('/products').then(({ data }) => {
      setProducts(data);
    });
  }, []);

  function handleOpenModal(
    modal: 'add' | 'edit' | 'remove',
    product: Product | null
  ) {
    setIsModalVisible(modal);
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setIsModalVisible('');
    setSelectedProduct(null);
  }

  function handleAddProduct({
    imagePath,
    name,
    description,
    price,
    category,
    ingredients,
  }: ProductRequest) {
    setIsLoading(true);

    api
      .post('/products', {
        imagePath,
        name,
        description,
        price,
        category,
        ingredients,
      })
      .then(({ data }) => {
        toast.success(`A categoria ${name} foi adicionada!`);

        setProducts((prevState) => [
          ...prevState,
          {
            imagePath,
            name,
            description,
            price,
            category: data.category,
            ingredients: data.ingredients,
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

  function handleEditProduct({
    imagePath,
    name,
    description,
    price,
    category,
    ingredients,
  }: ProductRequest) {
    setIsLoading(true);

    api
      .put(`/products/${selectedProduct?._id}`, {
        imagePath,
        name,
        description,
        price,
        category,
        ingredients,
      })
      .then(({ data }) => {
        toast.success(`A categoria ${name} foi editada!`);

        setProducts((prevState) =>
          prevState.map((product) =>
            product._id === selectedProduct?._id
              ? {
                ...product,
                imagePath,
                name,
                description,
                price,
                product,
                ingredients: data.ingredients,
              }
              : product
          )
        );
      })
      .catch(() => {
        toast.error(`Erro ao editar a categoria ${name}, tente novamente!`);
      })
      .finally(() => {
        setIsLoading(false);
        setIsModalVisible('');
        setSelectedProduct(null);
      });
  }

  function handleRemoveProduct() {
    setIsLoading(true);

    api.delete(`/products/${selectedProduct?._id}`);

    toast.success(`A categoria ${selectedProduct?.name} foi excluida!`);

    setProducts((prevState) =>
      prevState.filter((category) => category._id !== selectedProduct?._id)
    );
    setSelectedProduct(null);
    setIsLoading(false);
    setIsModalVisible('');
  }

  return {
    products,
    selectedProduct,
    isModalVisible,
    isLoading,
    handleOpenModal,
    handleCloseModal,
    handleAddProduct,
    handleEditProduct,
    handleRemoveProduct,
  };
}
