import { Request, Response, NextFunction } from 'express';
import RedisConnection from '@cache/Connection';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const client = await RedisConnection.connect();
  client.get(id, (error, data) => {
    if (error) {
      res.status(500).send(error);
    }
    if (data !== null) {
      res.send(data);
    } else {
      next();
    }
  });
};
