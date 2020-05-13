import MongoMock from '@utils/tests/MongoMock';
import UserData from './structures/UserData';

import CreateAccountService from '@services/CreateAccountService';

import Account from '@schemas/Account';
import GetAccountBySecretService from './GetAccountBySecretService';

describe('Get Account by secret', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Account.deleteMany({});
  });

  it('should be able to get a account by secret', async () => {
    const createAccountService = new CreateAccountService();

    const userData: UserData = {
      password: '123',
      user_name: 'Charles',
      user_email: 'charlesmarafao@gmail.com',
    };

    await createAccountService.run(userData);

    const getAccountBySecretService = new GetAccountBySecretService();

    const { statusCode } = await getAccountBySecretService.run(userData);

    expect(statusCode).toBe(200);
  });
});
