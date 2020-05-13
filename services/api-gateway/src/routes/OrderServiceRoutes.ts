import { Router } from 'express';
import httpProxy from 'express-http-proxy';
import authMiddleware from '@middlewares/auth';

import ServicesUrls from '@config/ServicesUrls';

const OrderServiceProxy = httpProxy(
  ServicesUrls.OrderApiUrl,
) as AsyncGeneratorFunction;

const routes = Router();

routes.post('/orders', authMiddleware, (req, res, next) =>
  OrderServiceProxy(req, res, next),
);

routes.get('/orders', authMiddleware, (req, res, next) =>
  OrderServiceProxy(req, res, next),
);

routes.get('/orders/:id', authMiddleware, (req, res, next) =>
  OrderServiceProxy(req, res, next),
);

routes.get('/orders/email/search', authMiddleware, (req, res, next) =>
  OrderServiceProxy(req, res, next),
);

export default routes;
