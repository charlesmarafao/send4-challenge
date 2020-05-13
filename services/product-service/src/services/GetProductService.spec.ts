import GetProductService from '@services/GetProductService';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Get product', () => {
  it('should be able to return product', async () => {
    const getProductService = new GetProductService();

    mockedAxios.get.mockResolvedValue({
      status: 200,
      data: { product: true },
    });

    const product = await getProductService.run('1');

    expect(product).toEqual(
      expect.objectContaining({
        statusCode: 200,
        responseBody: { product: true },
      }),
    );
  });
});
