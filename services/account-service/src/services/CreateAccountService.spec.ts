import MongoMock from '@utils/tests/MongoMock';
import UserData from './structures/UserData';

import CreateAccountService from '@services/CreateAccountService';

import Account from '@schemas/Account';

describe('Create Account', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Account.deleteMany({});
  });

  it('should be able to create Account', async () => {
    const createAccountService = new CreateAccountService();

    const userData: UserData = {
      password: '123',
      user_name: 'Charles',
      user_email: 'charlesmarafao@gmail.com',
    };

    await createAccountService.run(userData);

    const account = await Account.findOne({ user_name: userData.user_name });

    expect(account).toBeTruthy();
  });
});
