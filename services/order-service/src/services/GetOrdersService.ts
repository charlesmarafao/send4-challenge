import Order from '@schemas/Order';
import UserData from './structures/UserData';
import Responsedata from './structures/ResponseData';

class GetOrdersService {
  async run(user_id: string, page?: number): Promise<Responsedata> {
    const orders = await Order.find({
      user_id: user_id,
    })
      .skip(((page || 1) - 1) * 10)
      .limit(10);

    if (orders && orders.length) {
      return {
        statusCode: 200,
        responseBody: orders,
      };
    }
    return {
      statusCode: 404,
      responseBody: { message: 'Orders not found' },
    };
  }
}

export default GetOrdersService;
