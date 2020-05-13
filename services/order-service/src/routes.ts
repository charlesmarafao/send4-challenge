import { Router } from 'express';

import CreateOrderService from '@services/CreateOrderService';
import { UI } from 'bull-board';
import GetOrdersService from '@services/GetOrdersService';
import GetOrderService from '@services/GetOrderService';
import GetOrderByEmailService from '@services/GetOrderByEmailService';

const routes = Router();
routes.use('/queues', UI);

routes.post('/orders', async (req, res) => {
  const { user, products } = req.body;

  const createOrderService = new CreateOrderService();

  const { statusCode, responseBody } = await createOrderService.run(
    user,
    products,
  );

  return res.status(statusCode).json(responseBody);
});

routes.get('/orders', async (req, res) => {
  const { user_id } = req.query;

  const getOrdersService = new GetOrdersService();

  const { statusCode, responseBody } = await getOrdersService.run(
    user_id as string,
  );

  return res.status(statusCode).json(responseBody);
});

routes.get('/orders/:id', async (req, res) => {
  const { id } = req.params;

  const getOrderService = new GetOrderService();

  const { statusCode, responseBody } = await getOrderService.run(id);

  return res.status(statusCode).json(responseBody);
});

routes.get('/orders/email/search', async (req, res) => {
  const { email } = req.query;

  const getOrderByEmailService = new GetOrderByEmailService();

  const { statusCode, responseBody } = await getOrderByEmailService.run(
    email as string,
  );

  return res.status(statusCode).json(responseBody);
});

export default routes;
