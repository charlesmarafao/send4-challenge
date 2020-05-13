import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import logger from 'morgan';
import helmet from 'helmet';
import redis from 'redis';
import RateLimit from 'express-rate-limit';
import RateLimitRedis from 'rate-limit-redis';
import Config from '@config/redis';
import cors from 'cors';
const app = express();

app.use(bodyParser.json());

app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONT_URL,
  }),
);

app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

const rateLimitConfig = new RateLimit({
  store: new RateLimitRedis({
    client: redis.createClient({
      port: Config.port,
      host: Config.host,
    }),
  }),
  windowMs: 1000 * 60 * 15,
  max: 100,
});

app.use(rateLimitConfig);

app.use('/v1', routes);

export default app;
