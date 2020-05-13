import axios from 'axios';
import Shopify from '@config/shopify';

import ProductsData from './structures/ProductsData';
import ResponseData from './structures/ResponseData';

class GetProductsService {
  url: string;

  constructor() {
    this.url = Shopify.BaseUrl;
  }
  async run(): Promise<ResponseData> {
    const url = `${this.url}/admin/api/2020-01/products.json`;

    try {
      const response = await axios.get<ProductsData>(url);

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

export default GetProductsService;
