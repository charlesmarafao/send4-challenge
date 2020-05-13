import GetProductsService from '@services/GetProductsService';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Get products', () => {
  it('should be able to return products', async () => {
    const getProductsService = new GetProductsService();

    mockedAxios.get.mockResolvedValue({
      status: 200,
      data: { products: true },
    });

    const products = await getProductsService.run();

    expect(products).toEqual(
      expect.objectContaining({
        statusCode: 200,
        responseBody: { products: true },
      }),
    );
  });
});
