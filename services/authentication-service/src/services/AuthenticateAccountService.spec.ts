import AuthenticateAccountService from '@services/AuthenticateAccountService';
import axios from 'axios';
import UserData from './structures/UserData';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Authentication', () => {
  it('should be able to return token', async () => {
    const authenticateAccountService = new AuthenticateAccountService();

    mockedAxios.post.mockResolvedValue({
      data: {
        user_email: 'charlesmarafao@gmail.com',
        id: '5eba1a5249c51500aa6dad1e',
      },
    });

    const user: UserData = {
      user_email: 'charlesmarafao@gmail.com',
      password: '123',
    };

    const reponse = await authenticateAccountService.run(user);

    expect(reponse).toEqual(
      expect.objectContaining({
        statusCode: 200,
      }),
    );
  });
});
