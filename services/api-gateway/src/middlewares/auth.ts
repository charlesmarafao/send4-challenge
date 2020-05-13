import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Config from '@config/secret';

// interface TokenPayload {
//   iat: number;
//   exp: number;
//   user_id: string;
//   user_email: string;
// }

export default (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');
  if (token) {
    // const user = jwt.verify(token, Config.secret);
    const user = token;

    // To do
    // - Send user's account info in each authenticated route
    // Problem - http-proxy doesn't send request/response manipulated

    // const { user_id, user_email } = user as TokenPayload;

    // req.user = {
    //   user_id,
    //   user_email,
    // };

    if (user) {
      return next();
    }
  }

  return res.status(401).json({ error: 'Token invalid' });
};
