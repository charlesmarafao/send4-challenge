import MongoMock from '@utils/tests/MongoMock';
import QueueMock from '@utils/tests/QueueMock';
import ProductsData from './structures/ProductsData';
import OrderData from './structures/OrderData';
import UserData from './structures/UserData';

import CreateOrderService from '@services/CreateOrderService';

import Order from '@schemas/Order';

describe('Create Order', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Order.deleteMany({});
  });

  it('should be able to create Order', async () => {
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

    const order = await Order.findOne({ user_id: userData.user_id });

    expect(order).toBeTruthy();
  });
});
