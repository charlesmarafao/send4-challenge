import MongoMock from '@utils/tests/MongoMock';
import ProductsData from './structures/ProductsData';
import OrderData from './structures/OrderData';
import UserData from './structures/UserData';

import CreateOrderService from '@services/CreateOrderService';

import Order from '@schemas/Order';
import GetOrderByEmailService from './GetOrderByEmailService';

describe('Get Order by email', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Order.deleteMany({});
  });

  it('should be able to get a order by email', async () => {
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

    const { responseBody } = await createOrderService.run(userData, products);

    const getOrderByEmailService = new GetOrderByEmailService();

    const { statusCode } = await getOrderByEmailService.run(
      responseBody.order.user_email,
    );

    expect(statusCode).toBe(200);
  });
});
