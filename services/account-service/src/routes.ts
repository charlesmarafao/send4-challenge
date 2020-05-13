import { Router } from 'express';

import CreateAccountService from '@services/CreateAccountService';
import GetAccountBySecretService from '@services/GetAccountBySecretService';

const routes = Router();

routes.post('/accounts', async (req, res) => {
  const user = req.body;

  const createAccountService = new CreateAccountService();

  const { statusCode, responseBody } = await createAccountService.run(user);

  return res.status(statusCode).json(responseBody);
});

routes.post('/accounts/verify', async (req, res) => {
  const user = req.body;

  const getAccountBySecretService = new GetAccountBySecretService();

  const { statusCode, responseBody } = await getAccountBySecretService.run(
    user,
  );

  return res.status(statusCode).json(responseBody);
});

export default routes;
