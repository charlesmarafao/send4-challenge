import { Router } from 'express';
import httpProxy from 'express-http-proxy';
import authMiddleware from '@middlewares/auth';

import ServicesUrls from '@config/ServicesUrls';

const productsServiceProxy = httpProxy(
  ServicesUrls.ProductApiUrl,
) as AsyncGeneratorFunction;

const routes = Router();

routes.get('/products', authMiddleware, (req, res, next) =>
  productsServiceProxy(req, res, next),
);

routes.get('/products/:id', authMiddleware, (req, res, next) =>
  productsServiceProxy(req, res, next),
);

export default routes;
