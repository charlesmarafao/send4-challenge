import { Router } from 'express';
import httpProxy from 'express-http-proxy';

import ServicesUrls from '@config/ServicesUrls';

const accountServiceProxy = httpProxy(
  ServicesUrls.AccountApiUrl,
) as AsyncGeneratorFunction;

const routes = Router();

routes.post('/accounts/verify', (req, res, next) =>
  accountServiceProxy(req, res, next),
);

routes.post('/accounts', (req, res, next) =>
  accountServiceProxy(req, res, next),
);

export default routes;
