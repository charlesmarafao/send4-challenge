import axios from 'axios';
import jwt from 'jsonwebtoken';
import ResponseData from './structures/ResponseData';
import AccountService from '@config/account-service';
import UserData from './structures/UserData';
import Config from '@config/secret';
import { ServerData } from './structures/AccountServiceResponseData';

class GetProductService {
  url: string;

  constructor() {
    this.url = AccountService.BaseUrl;
  }

  async run(user: UserData): Promise<ResponseData> {
    try {
      const { data } = await axios.post<ServerData>(this.url, user);

      const token = jwt.sign(
        { user_id: data.id, user_email: data.user_email },
        Config.secret,
        {
          expiresIn: '7d',
        },
      );

      return {
        statusCode: 200,
        responseBody: { token },
      };
    } catch (error) {
      return {
        statusCode: error.response.status,
        responseBody: error.response.data,
      };
    }
  }
}

export default GetProductService;
