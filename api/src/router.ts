import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductByCategory } from './app/useCases/categories/listProductByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
import { listIngredients } from './app/useCases/ingredients/listIngredients';
import { createIngredient } from './app/useCases/ingredients/createIngredient';
import { deleteCategory } from './app/useCases/categories/deleteCategory';
import { editCategory } from './app/useCases/categories/editCategory';
import { deleteProduct } from './app/useCases/products/deleteProduct';
import { editProduct } from './app/useCases/products/editProduct';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get('/categories', listCategories);
router.post('/categories', createCategory);
router.get('/categories/:categoryId/products', listProductByCategory);
router.delete('/categories/:categoryId', deleteCategory);
router.put('/categories/:categoryId', editCategory);

router.get('/ingredients', listIngredients);
router.post('/ingredients', createIngredient);

router.get('/products', listProducts);
router.post('/products', upload.single('image'), createProduct);
router.delete('/products/:productId', deleteProduct);
router.put('/products/:productId', editProduct);

router.get('/orders', listOrders);
router.post('/orders',createOrder);
router.patch('/orders/:orderId', changeOrderStatus);
router.delete('/orders/:orderId', cancelOrder);
