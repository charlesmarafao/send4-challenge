import Account from '@schemas/Account';
import bcrypt from 'bcryptjs';
import UserData from './structures/UserData';
import ResponseData from './structures/ResponseData';

class CreateAccountService {
  async run(user: UserData): Promise<ResponseData> {
    try {
      if (await Account.findOne({ user_email: user.user_email })) {
        return {
          statusCode: 409,
          responseBody: { message: 'Emails already exists' },
        };
      }

      const password = bcrypt.hashSync(user.password, 10);

      const account = await Account.create({
        password,
        user_name: user.user_name,
        user_email: user.user_email,
      });

      if (account) {
        return {
          statusCode: 201,
          responseBody: account,
        };
      }

      return account;
    } catch (error) {
      return {
        statusCode: 422,
        responseBody: { message: 'Account could not be created' },
      };
    }
  }
}

export default CreateAccountService;
