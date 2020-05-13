import { Router } from 'express';

import AuthenticateAccountService from '@services/AuthenticateAccountService';
import UserData from '@services/structures/UserData';

const routes = Router();

routes.post('/authenticate', async (req, res) => {
  const user: UserData = req.body;

  const authenticateAccountService = new AuthenticateAccountService();

  const { statusCode, responseBody } = await authenticateAccountService.run(
    user,
  );

  return res.status(statusCode).json(responseBody);
});

export default routes;
