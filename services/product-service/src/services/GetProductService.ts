import axios from 'axios';
import Shopify from '@config/shopify';
import RedisConnection from '@cache/Connection';
import ProductsEntity from './structures/ProductsData';
import ResponseData from './structures/ResponseData';

class GetProductService {
  url: string;

  constructor() {
    this.url = Shopify.BaseUrl;
  }

  async run(id: string): Promise<ResponseData> {
    try {
      const response = await axios.get<ProductsEntity>(
        `${this.url}/admin/api/2020-01/products/${id}.json`,
      );

      const client = await RedisConnection.connect();

      client.setex(id, 3600, JSON.stringify(response.data));

      return {
        statusCode: response.status,
        responseBody: response.data,
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
