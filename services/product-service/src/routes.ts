import { Router } from 'express';

import GetProductsService from '@services/GetProductsService';
import GetProductService from '@services/GetProductService';
import checkCache from '@middlewares/checkCache';
const routes = Router();

routes.get('/products', async (req, res) => {
  const getProductsService = new GetProductsService();

  const products = await getProductsService.run();

  return res.status(products.statusCode).json(products);
});

routes.get('/products/:id', checkCache, async (req, res) => {
  const { id } = req.params;

  const getProductService = new GetProductService();

  const product = await getProductService.run(id);

  return res.status(product.statusCode).json(product);
});

export default routes;
