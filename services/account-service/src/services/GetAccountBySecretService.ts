import Account from '@schemas/Account';
import UserData from './structures/UserData';
import ResponseData from './structures/ResponseData';
import bcrypt from 'bcryptjs';

class GetAccountBySecretService {
  async run(user: UserData): Promise<ResponseData> {
    const account: UserData | null = await Account.findOne({
      user_email: user.user_email,
    });

    if (account && bcrypt.compareSync(user.password, account.password)) {
      return {
        statusCode: 200,
        responseBody: account,
      };
    }

    return {
      statusCode: 404,
      responseBody: { message: 'Account not found' },
    };
  }
}

export default GetAccountBySecretService;
