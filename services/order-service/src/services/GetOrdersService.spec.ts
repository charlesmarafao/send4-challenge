import MongoMock from '@utils/tests/MongoMock';
import QueueMock from '@utils/tests/QueueMock';
import ProductsData from './structures/ProductsData';
import OrderData from './structures/OrderData';
import UserData from './structures/UserData';

import CreateOrderService from '@services/CreateOrderService';
import GetOrdersService from '@services/GetOrdersService';

import Order from '@schemas/Order';

describe('Get Orders', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Order.deleteMany({});
  });

  it('should be able to get Orders', async () => {
    const products: ProductsData = [
      {
        image: 'test',
        title: 'test',
        price: 'test',
      },
    ];

    const createOrderService = new CreateOrderService();

    const userData: UserData = {
      user_id: '1',
      user_email: 'charlesmarafao@gmail.com',
    };

    await createOrderService.run(userData, products);

    const getOrdersService = new GetOrdersService();

    const { statusCode, responseBody } = await getOrdersService.run(
      userData.user_id,
    );

    expect(statusCode).toBe(200);
    expect(responseBody).toBeTruthy();
  });
});
