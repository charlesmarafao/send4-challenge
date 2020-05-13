import { Router } from 'express';
import httpProxy from 'express-http-proxy';
import Brute from 'express-brute';
import BruteRedis from 'express-brute-redis';
import Config from '@config/redis';
import ServicesUrls from '@config/ServicesUrls';
const routes = Router();

const BruteStore = new BruteRedis({
  port: Config.port,
  host: Config.host,
});

const bruteForce = new Brute(BruteStore);

const AuthServiceProxy = httpProxy(
  ServicesUrls.AuthApiUrl,
) as AsyncGeneratorFunction;

routes.post('/authenticate', bruteForce.prevent, (req, res, next) =>
  AuthServiceProxy(req, res, next),
);

export default routes;
